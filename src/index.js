import React, { useContext } from 'react';
import { useColorScheme } from 'react-native';

import Routes from './navigation/Routes';

import context from './context/Context';

import { ThemeProvider } from 'styled-components';
import themes from './themes';

export default function App(){
    const { themeSelected } = useContext(context)
    
    //Pega o theme do dispositivo d usuário
    const deviceTheme = useColorScheme();
    const theme = themes[deviceTheme] || theme.dark;
    
    return (
        <ThemeProvider theme={themes[themeSelected]}>
            <Routes />
        </ThemeProvider>
    );
}
