import React, { useRef, useState } from 'react';
import { Text, TouchableOpacity, View, Animated, Easing } from 'react-native';

import { QuestionContainer } from './styles';

import { SimpleLineIcons } from '@expo/vector-icons';

import {
    useFonts,
    RobotoMono_500Medium,
} from '@expo-google-fonts/roboto-mono';

function Question({ route, navigation }){
    const TextTranslate = useRef(new Animated.Value(0)).current;
    const [index, setIndex] = useState(0);
    const [showed, setShowed] = useState(false);

    const deckCards = {
        id: 0,
        deckName: 'Beddle the bard',
        cards: [
            { id: 0, front: 'Something', back: 'Alguma coisa' },
            { id: 1, front: 'Something 1', back: 'Alguma coisa  1' },
            { id: 2, front: 'Something 2', back: 'Alguma coisa 2' },
        ]
    }

    const { color } = route.params;
    // useEffect(()=> {
    //     navigation.setOptions({ title: title });
    // }, []);

    function showAnswer(){
        Animated.timing(TextTranslate, {
            toValue: -100,
            duration: 300,
            useNativeDriver: true,
            easing: Easing.linear
        }).start( () => setShowed(true));
    }
    function goNextCard(){
        setShowed(false);
        setIndex(index => index + 1)
        TextTranslate.setValue(0);
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
    
    return (
        <QuestionContainer>
            {
                deckCards.cards[index] 
                ? 
                    <View style={{width: '100%', height: '50%', justifyContent: 'center', alignItems: 'center'}}>
                        <Animated.Text style={{color: '#fff', fontSize: 24, fontFamily: 'RobotoMono_500Medium', transform:[{ translateY: TextTranslate }]  }}>
                            {deckCards.cards[index]?.front}
                        </Animated.Text>
                        <Animated.View style={{ opacity: answerInterplate }}> 
                            <SimpleLineIcons name="arrow-down" size={24} color={`#${color}`} /> 
                        </Animated.View>
                        <Animated.Text style={{color: '#fff', fontSize: 24, fontFamily: 'RobotoMono_500Medium', opacity: answerInterplate, transform:[{ translateY: answerInterplateTranslate }] }}>
                            {deckCards.cards[index]?.back}
                        </Animated.Text>
                    </View>
                :
                <View style={{width: '100%', height: '50%', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#fff', fontSize: 24, fontFamily: 'RobotoMono_500Medium' }}>
                        Acabou!
                    </Text>
                </View>
            }
            {
              deckCards.cards[index] 
                ?  
                    <TouchableOpacity 
                        activeOpacity={0.7}  
                        style={{ backgroundColor: `#${color}`, padding: 15, borderRadius: 5, marginTop: 50 }}
                        onPress={() => showed ? goNextCard() : showAnswer()}
                    >
                        <Text style={{color: '#fff', fontSize: 24, fontFamily: 'RobotoMono_500Medium' }}>{ showed ? 'Próximo' : 'Ver'}</Text>
                    </TouchableOpacity>
                :
                    <TouchableOpacity 
                        activeOpacity={0.7}  
                        style={{ backgroundColor: `#${color}`, padding: 15, borderRadius: 5, marginTop: 50 }}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={{color: '#fff', fontSize: 24, fontFamily: 'RobotoMono_500Medium' }}> Voltar </Text>
                    </TouchableOpacity>
            }
            
        </QuestionContainer>
    );
}

export default Question;