import React, { useState, useContext } from 'react';
import Context from '../../context/Context';

import { AddDeckContainer, AddDeckContent, DeckNomeInput, BotaoCriar, ModalTitle, ModalBody, TextModal } from './styles';

function AddDeck({ navigation }){
    const [text, setText] = useState('');
    const { decks, setDecks } = useContext(Context);

    function AddCard(){
        const newDeck = { 
            id: decks.length,
            deckName: text,
            totalCardItems: 0,
            color: '57BBDB',
            isLiked: false 
        };

        const allExistingDecks = [...decks, newDeck];
        
        setDecks(allExistingDecks);
        
        navigation.goBack();
    }
    return(
        <AddDeckContainer>
            <AddDeckContent>
                <ModalTitle>
                    <TextModal>Novo Deck</TextModal>
                </ModalTitle>
                <ModalBody>
                    <DeckNomeInput 
                        value={text}
                        onChangeText={text => setText(text)}
                        underlineColorAndroid="#fff"
                        autoFocus={true}                           
                    />
                    <BotaoCriar onPress={() => AddCard()}>
                        <TextModal>Criar</TextModal>
                    </BotaoCriar>
                </ModalBody>
            </AddDeckContent>
        </AddDeckContainer>
    )
}

export default AddDeck;