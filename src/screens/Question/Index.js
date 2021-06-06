import React, { useRef, useState, useContext } from 'react';
import { Animated, Easing } from 'react-native';
import Context from '../../context/Context';

import { QuestionContainer, Middle, Word, ActionButton } from './styles';

import { SimpleLineIcons } from '@expo/vector-icons';

import { RobotoMono_500Medium } from '@expo-google-fonts/roboto-mono';

function Question({ route, navigation }){

    const TextTranslate = useRef(new Animated.Value(0)).current;
    const { cardIndex, setCardIndex, deckCards } = useContext(Context);
    const [showed, setShowed] = useState(false);
    const { deckId , color, totalItems } = route.params;

    function showAnswer(){
        Animated.timing(TextTranslate, {
            toValue: -100,
            duration: 300,
            useNativeDriver: true,
            easing: Easing.linear
        }).start( () => setShowed(true));
    }
    function goNextCard(){
        if(totalItems >= cardIndex+1) {
            setCardIndex(index => index + 1)
        }
        setShowed(false);
        TextTranslate.setValue(0);
    }

    function goBackHome(){
        navigation.goBack();
        setCardIndex(0);
    }

    const answerInterplate = TextTranslate.interpolate({ 
        inputRange: [-100,  0 , 1], 
        outputRange: [1 ,0 ,0],
        extrapolate: 'clamp'
    });

    const answerInterplateTranslate = TextTranslate.interpolate({ 
        inputRange: [-100,  0 , 1], 
        outputRange: [100 , 0, 0 ],
        extrapolate: 'clamp'
    });
    console.log(deckCards)
    return (
        <QuestionContainer>
            {
                deckCards[deckId].cards[cardIndex] 
                ? 
                    <Middle>
                        <Word style={{ transform:[{ translateY: TextTranslate }]  }}>
                            {deckCards[deckId].cards[cardIndex]?.front}
                        </Word>
                        <Animated.View style={{ opacity: answerInterplate }}> 
                            <SimpleLineIcons name="arrow-down" size={24} color={`#${color}`} /> 
                        </Animated.View>
                        <Word style={{ opacity: answerInterplate, transform:[{ translateY: answerInterplateTranslate }] }}>
                            {deckCards[deckId].cards[cardIndex]?.back}
                        </Word>
                    </Middle>
                :
                    <Middle>
                        <Word>
                            Acabou!
                        </Word>
                    </Middle>
            }
            {
              deckCards[deckId].cards[cardIndex] 
                ?  
                    <ActionButton 
                        style={{ backgroundColor: `#${color}` }}
                        onPress={() => showed ? goNextCard() : showAnswer()}
                    >
                        <Word> { showed ? 'Próximo' : 'Ver'} </Word>
                    </ActionButton>
                :
                    <ActionButton 
                        style={{ backgroundColor: `#${color}` }}
                        onPress={() => goBackHome()}
                    >
                        <Word> Voltar </Word>
                    </ActionButton>
            }
            
        </QuestionContainer>
    );
}

export default Question;