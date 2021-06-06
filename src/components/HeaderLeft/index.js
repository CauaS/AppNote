import React, { useContext } from 'react';
import { SimpleLineIcons } from '@expo/vector-icons';

import Context from '../../context/Context';

import { DeckHeaderContainer, DeckHeaderLength, DeckHeaderIcon, TotalCars, CardCount } from './styles';

function DeckHeaderLeft({ navigation, route}){
    const { cardIndex,  themeSelected} = useContext(Context);
    const { totalItems } = route.params;

    return(
        <DeckHeaderContainer>
            <DeckHeaderLength>
                <CardCount>
                    {cardIndex} 
                </CardCount>
                <TotalCars> - {totalItems}</TotalCars>
            </DeckHeaderLength>
            <DeckHeaderIcon
                hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                activeOpacity={0.7}
            >
                <SimpleLineIcons name="pencil" size={20} color={themeSelected === 'light' ? '#57BBDB' : '#FE9A37'}  />
            </DeckHeaderIcon>
        </DeckHeaderContainer>
    );
}

export default DeckHeaderLeft;