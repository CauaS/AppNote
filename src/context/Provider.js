import React, { useState } from 'react';
import Context from './Context';

function Provider({ children }){
    const [cardIndex, setCardIndex] = useState(0);

    return (
        <Context.Provider 
            value={{ 
                cardIndex, setCardIndex,
            }}>
            { children }
        </Context.Provider>
    )
    
}

export default Provider;