import React from 'react';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home/Home';
import AddDeck from '../screens/AddDeck';
import Question from '../screens/Question';
import DeckHeaderLeft from '../components/HeaderLeft';
import AddDeckCard from '../screens/AddDeckCard'

export default function Routes() {
    const Stack = createStackNavigator(); 
    const config = {
        animation: 'timing',
    };
    
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    options={{
                        headerShown: false
                    }}
                >
                    {props => <Home {...props} />}
                </Stack.Screen>
                <Stack.Screen
                    name="AddDeck"
                    options={{
                        mode: 'modal',
                        headerMode: 'none',
                        cardStyle:{
                          backgroundColor:"black",
                          opacity: 0.8
                      },
                      headerShown: false
                    }}
                >
                    {props => <AddDeck {...props} />}
                </Stack.Screen>
                <Stack.Screen
                    name="Question"
                    options={({ route, navigation }) => ({
                        title: route.params.title,
                        transitionSpec: {
                            open: config,
                            close: config,
                          },
                        headerStyle: {
                            backgroundColor: 'black',
                        },
                        headerTintColor: '#fff',
                        headerRight:() => <DeckHeaderLeft navigation={navigation} route={route}/>
                    })}
                >
                    {props => <Question {...props} />}
                </Stack.Screen>
                <Stack.Screen
                    name="AddDeckCard"
                    options={({ route, navigation }) => ({
                        title: route.params.title,
                        headerStyle: {
                            backgroundColor: 'black',
                        },
                        headerTintColor: '#fff',
                    })}
                >
                    {props => <AddDeckCard {...props} />}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}