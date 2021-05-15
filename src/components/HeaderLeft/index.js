import React, { useContext } from 'react';
import { Text } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

import Context from '../../context/Context';

import { DeckHeaderContainer, DeckHeaderLength, DeckHeaderIcon } from './styles';

function DeckHeaderLeft({ navigation, route}){
    const { cardIndex } = useContext(Context);
    const { color, totalItems } = route.params;

    return(
        <DeckHeaderContainer>
            <DeckHeaderLength>
                <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold' }}>
                    {cardIndex} 
                    <Text style={{ color: `#${color}`}}>
                        - {totalItems}
                    </Text>
                </Text> 
            </DeckHeaderLength>
            <DeckHeaderIcon
                hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                activeOpacity={0.7}
            >
                <SimpleLineIcons name="pencil" size={20} color={`#${color}`} />
            </DeckHeaderIcon>
        </DeckHeaderContainer>
    );
}

export default DeckHeaderLeft;