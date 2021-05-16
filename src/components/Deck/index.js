import React from 'react';
import { Text } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppLoading from 'expo-app-loading';
import {
    useFonts,
    RobotoMono_500Medium,
} from '@expo-google-fonts/roboto-mono';

import { DeckContainer, DeckHeader, DeckPlusIcon, DeckBottom, DeckBottomTotalCards, DeckLike } from './styles';

function Deck({ deckName, totalCardItems, color, isLiked, navigation }){
    let [fonts] = useFonts({ RobotoMono_500Medium });

    if (!fonts) {
        return <AppLoading />;
    }

    function toggleLike(){}

    return (
        <DeckContainer 
            style={{ backgroundColor: `#${color}`}}
            //bgColor={color}
            activeOpacity={0.9}
            onPress={() => navigation.navigate('Question',  { title: deckName, color: color, totalItems: totalCardItems })}
        >
            <DeckHeader>
                <Text style={{ fontFamily: 'RobotoMono_500Medium', fontSize: 23 }}>
                    {deckName}
                </Text>
                <DeckPlusIcon 
                    hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}>
                    <AntDesign name="plus" size={20} color="#fff" />
                </DeckPlusIcon>
            </DeckHeader>
            <DeckBottom>
                <DeckBottomTotalCards>
                    <MaterialCommunityIcons name="cards" size={20} color="#fff" style={{ marginRight: 3 }} />
                    <Text 
                        numberOfLines={1} 
                        style={{ color: '#fff', fontSize: 23, fontFamily: 'RobotoMono_500Medium'}}
                    >
                        {totalCardItems}
                    </Text>
                </DeckBottomTotalCards>
                <DeckLike 
                    onPress={toggleLike}
                    hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}>
                        {
                            isLiked ? <AntDesign name="heart" size={20} color="#fff" /> 
                                    : <AntDesign name="hearto" size={20} color="black" />
                        }
                    
                </DeckLike>
            </DeckBottom>
        </DeckContainer>
    )
}

export default Deck;