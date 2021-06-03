import React, { useState } from 'react';
import { useCallback } from 'react';
import Context from './Context';

function Provider({ children }){
    const [cardIndex, setCardIndex] = useState(0);
    const [decks, setDecks] = useState([]);
     
    const [deckCards, setDeckCards] = useState([]);
    
    const setFavorite = useCallback(
        (id) => {
            const newArray = decks.map((item) => {
                return item.id === id
                    ? { ...item, isLiked: !item.isLiked }
                    : { ...item, isSelected: false };
                }
            ).sort((value => { 
                return value.isLiked ? -1 : 1 
            }));
            
            setDecks(newArray);
        },[decks]
    );
    return (
        <Context.Provider 
            value={{ 
                cardIndex, setCardIndex,
                decks, setDecks,
                deckCards, setDeckCards,
                setFavorite
            }}>
            { children }
        </Context.Provider>
    )
    
}

export default Provider;