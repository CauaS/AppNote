import React, { useContext, useEffect } from 'react';
import Context from '../../context/Context';

import { Text, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import { HomeContainer, HomeHeader, HomeHeaderContent, HomeHeaderTitle, HomeHeaderIconArea, HomeHeaderIconPlus, HomeHeaderIconSearch } from './styles';

import { Feather, AntDesign } from '@expo/vector-icons';

import Deck from '../../components/Deck';

import AppLoading from 'expo-app-loading';
import { useFonts, RobotoMono_500Medium } from '@expo-google-fonts/roboto-mono';

export default function Home(props) {
    
    const { decks } = useContext(Context);
    let [fonts] = useFonts({ RobotoMono_500Medium });

    if (!fonts) {
        return <AppLoading />;
    }
    
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
                            <HomeHeaderIconPlus onPress={() => props.navigation.navigate('AddDeck')}>
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