import React, {useContext} from 'react';
import { Text } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppLoading from 'expo-app-loading';
import {
    useFonts,
    RobotoMono_500Medium,
} from '@expo-google-fonts/roboto-mono';

import { DeckContainer, DeckHeader, DeckPlusIcon, DeckBottom, DeckBottomTotalCards, DeckLike } from './styles';
import Context from '../../context/Context';

function Deck({ id, deckName, totalCardItems, color, isLiked, navigation }){
    
    const { setFavorite } = useContext(Context);
    let [fonts] = useFonts({ RobotoMono_500Medium });

    if (!fonts) {
        return <AppLoading />;
    }

    return (
        <DeckContainer 
            activeOpacity={0.9}
            disabled = { totalCardItems === 0 ?  true: false }
            onPress={() => navigation.navigate('Question',  { deckId: id, title: deckName, color: color, totalItems: totalCardItems })}
        >
            <DeckHeader>
                <Text style={{ fontFamily: 'RobotoMono_500Medium', fontSize: 23 }}>
                    {deckName}
                </Text>
                <DeckPlusIcon 
                    onPress={() => navigation.navigate('AddDeckCard',  { title: deckName, deckId: id })}
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
                    onPress={() =>  setFavorite(id)}
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