import React, { useContext } from 'react';
import Context from '../../context/Context';

import { StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import { HomeContainer, HomeHeader, HomeHeaderContent, HomeHeaderTitle, HomeHeaderIconArea, HomeHeaderIconPlus, HomeHeaderIconTheme, HomeHeaderText } from './styles';

import { Feather, AntDesign } from '@expo/vector-icons';

import Deck from '../../components/Deck';

import AppLoading from 'expo-app-loading';
import { useFonts, RobotoMono_500Medium } from '@expo-google-fonts/roboto-mono';
import { useCallback } from 'react';

export default function Home(props) {
    const { decks, setThemeSeleted, themeSelected } = useContext(Context);

    const toggleTheme = useCallback(
        () => { 
            console.log(themeSelected)
            themeSelected === 'light' ? setThemeSeleted('dark') : setThemeSeleted('light') 
        }, [themeSelected]);

    let [fonts] = useFonts({ RobotoMono_500Medium });

    if (!fonts) {
        return <AppLoading />;
    }
    
    return (
        <HomeContainer>
            <HomeHeader>
                <StatusBar 
                    backgroundColor={ themeSelected === 'light'?  "#fff" :'#000' } 
                    barStyle={themeSelected === 'light'?  "dark-content" :'light-content' } 
                />
                <HomeHeaderContent>
                    <HomeHeaderTitle>
                        <HomeHeaderText>Decks</HomeHeaderText>
                    </HomeHeaderTitle>
                    <HomeHeaderIconArea>
                        <TouchableOpacity  activeOpacity={0.8}>
                            <HomeHeaderIconTheme onPress={() => toggleTheme()}>
                                {
                                    themeSelected === 'light'
                                    ? <Feather name="moon" size={22} color="#fff" />
                                    : <Feather name="sun" size={22} color="#fff" />
                                }
                            </HomeHeaderIconTheme>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            activeOpacity={0.8}
                        >
                            <HomeHeaderIconPlus onPress={() => props.navigation.navigate('AddDeck')}>
                                <AntDesign name="plus" size={22} color={ themeSelected === 'light'? '#000' : "#fff" } />
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