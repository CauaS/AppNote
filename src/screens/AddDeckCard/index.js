import React,  { useState, useEffect, useContext, useRef } from 'react';
import Context from '../../context/Context';

import { AddDeckCardContainer, TextDecription, AddDeckCardInput, BotaoAdicionar } from './styles';
import { View } from 'react-native';

function AddDeckCard({ navigation, route }){
    const versoRef = useRef(null);
    const { deckId, title } = route.params;

    useEffect(() => {
        const existingCards = deckCards.find(i => i.deckId === deckId)?.cards || [];
        setCards(existingCards);
    }, []);

    const { setDeckCards, decks, deckCards } = useContext(Context);

    const [textFrente, setTextFrente] = useState('');
    const [textVerso, setTextVerso] = useState('');
    const [cards, setCards] = useState([]);

    function handleAddDeckCard(){
        const newCard = { 
            front: textFrente, back: textVerso
        };
        const allCards = [...cards, newCard];

        setCards(allCards);
        setTextFrente('');
        setTextVerso('');
    }

    function saveDeckCards(){
        if(!cards) return;

        const AllDeckCards = {
            deckId: deckId,
            deckName: title,
            cards: cards
        }
        if(deckCards.length > 0) deckCards.splice(deckId, 1);
        setDeckCards([...deckCards, AllDeckCards]);
        
        const existingDeck = decks.find(item => item.id === deckId);
        existingDeck.totalCardItems = cards.length;

        navigation.goBack();
    }

    return(
        <AddDeckCardContainer>
            <View style={{ marginTop: 25, height: 80, justifyContent:'space-between'  }}>
                <TextDecription>Frente</TextDecription>
                <AddDeckCardInput
                    value={textFrente}
                    onChangeText={text => setTextFrente(text)}
                    underlineColorAndroid="#fff"
                    autoFocus={true}
                    returnKeyType="next"
                    onSubmitEditing={() => versoRef.current.focus()}
                />
            </View>
            <View style={{ marginVertical: 40, height: 80, justifyContent:'space-between'  }}>
                <TextDecription>Verso</TextDecription>
                <AddDeckCardInput  
                    value={textVerso}
                    onChangeText={text => setTextVerso(text)}
                    underlineColorAndroid="#fff"
                    ref={versoRef}
                />
            </View>
            <BotaoAdicionar 
                disabled={textFrente.length === 0 && textVerso.length === 0 }
                onPress={() => handleAddDeckCard()}
            >
                <TextDecription>Adicionar </TextDecription>
            </BotaoAdicionar>
            <BotaoAdicionar onPress={() => saveDeckCards()}>
                <TextDecription>Voltar </TextDecription>
            </BotaoAdicionar>
        </AddDeckCardContainer>
    )
}

export default AddDeckCard;