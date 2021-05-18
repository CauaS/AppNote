import React, { useState } from 'react';
import { AddDeckContainer, AddDeckContent, DeckNomeInput, BotaoCriar, ModalTitle, ModalBody, TextModal } from './styles';

function AddDeck({ navigation }){
    const [text, setText] = useState('');
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
                        <BotaoCriar onPress={() => navigation.goBack()}>
                            <TextModal>Criar</TextModal>
                        </BotaoCriar>
                    </ModalBody>
                </AddDeckContent>
      </AddDeckContainer>
    )
}

export default AddDeck;