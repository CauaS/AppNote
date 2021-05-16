import React from 'react';

import { View, Text, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import { HomeContainer, HomeHeader, HomeHeaderContent, HomeHeaderTitle, HomeHeaderIconArea, HomeHeaderIconPlus, HomeHeaderIconSearch } from './styles';

import { Feather, AntDesign } from '@expo/vector-icons';

import Deck from '../../components/Deck';

import AppLoading from 'expo-app-loading';
import { useFonts, RobotoMono_500Medium } from '@expo-google-fonts/roboto-mono';

export default function Home(props) {
    let [fonts] = useFonts({ RobotoMono_500Medium });

    if (!fonts) {
        return <AppLoading />;
    }

    const decks = [
        { id: 0, deckName: "Beddle the bard", totalCardItems: 3, color: 'F96A4B', isLiked: true },
        { id: 1, deckName: "Beddle the bard", totalCardItems: 3, color: '57BBDB', isLiked: false },
        { id: 2, deckName: "Beddle the bard", totalCardItems: 3, color: 'FE9A37', isLiked: false },
        { id: 3, deckName: "Beddle the bard", totalCardItems: 3, color: 'F96A4B', isLiked: false },
        { id: 4, deckName: "Beddle the bard", totalCardItems: 3, color: 'DEA44D', isLiked: false },
        { id: 5, deckName: "Beddle the bard", totalCardItems: 60, color: '57BBDB', isLiked: false }
    ];

    return (
        <HomeContainer>
            <HomeHeader>
                <StatusBar backgroundColor="black" barStyle="light-content" />
                <HomeHeaderContent>
                    <HomeHeaderTitle>
                        <Text style={{ fontFamily: 'RobotoMono_500Medium', color: "#fff", fontSize: 25 }}>Decks</Text>
                    </HomeHeaderTitle>
                    <HomeHeaderIconArea>
                        <TouchableOpacity activeOpacity={0.8}>
                            <HomeHeaderIconSearch>
                                <Feather name="search" size={22} color="#fff" />
                            </HomeHeaderIconSearch>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            activeOpacity={0.8}
                            hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}
                        >
                            <HomeHeaderIconPlus>
                                <AntDesign name="plus" size={22} color="#fff" />
                            </HomeHeaderIconPlus>
                        </TouchableOpacity>
                    </HomeHeaderIconArea>
                </HomeHeaderContent>
            </HomeHeader>
            <ScrollView>
            {
                 decks.map(deck => (
                    <Deck key={deck.id} {...deck} {...props}/>
                ))
            }
            </ScrollView>
            
        </HomeContainer>    
    );
}