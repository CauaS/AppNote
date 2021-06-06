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

    const { setDeckCards, decks, deckCards, themeSelected } = useContext(Context);

    const [textFrente, setTextFrente] = useState('');
    const [textVerso, setTextVerso] = useState('');
    const [cards, setCards] = useState([]);

    const isNewCardValid = () => (textFrente.length === 0 || textVerso.length === 0) ? true : false;

    //TODO: Analisar melhor essa função, ver necessidade da variável cards...
    function handleAddDeckCard(){
        const newCard = { 
            front: textFrente, back: textVerso
        };
        const allCards = [...cards, newCard];

        setCards(allCards);

        const AllDeckCards = {
            deckId: deckId,
            deckName: title,
            cards: allCards
        }
        if(deckCards.length > 0) deckCards.splice(deckId, 1);
        setDeckCards([...deckCards, AllDeckCards]);
        
        const existingDeck = decks.find(item => item.id === deckId);
        existingDeck.totalCardItems = allCards.length;

        setTextFrente('');
        setTextVerso('');
    }

    return(
        <AddDeckCardContainer>
            <View style={{ marginTop: 25, height: 80, justifyContent:'space-between'  }}>
                <TextDecription>Frente</TextDecription>
                <AddDeckCardInput
                    value={textFrente}
                    onChangeText={text => setTextFrente(text)}
                    underlineColorAndroid={themeSelected === 'light' ? '#000' : "#fff"}
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
                    underlineColorAndroid={themeSelected === 'light' ? '#000' : "#fff"}
                    ref={versoRef}
                />
            </View>
            <BotaoAdicionar 
                disabled={isNewCardValid()}
                onPress={() => handleAddDeckCard()}
            >
                <TextDecription>Adicionar </TextDecription>
            </BotaoAdicionar>
            <BotaoAdicionar onPress={() => navigation.goBack()}>
                <TextDecription>Voltar </TextDecription>
            </BotaoAdicionar>
        </AddDeckCardContainer>
    )
}

export default AddDeckCard;