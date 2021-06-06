import styled from 'styled-components/native';

export const AddDeckCardContainer = styled.View`
    flex: 1;
    padding: 20px;
    background-color: ${props => props.theme.background};
`;

export const AddDeckCardInput = styled.TextInput`
    color: ${props => props.theme.textColor}; 
    padding-bottom: 8px; 
    padding-left: 2px; 
    font-size: 20px;
`;

export const BotaoAdicionar = styled.TouchableOpacity`
    background-color: ${props => props.theme.color};
    margin-top: 10px;
    padding: 5px;
    align-items: center;
    border-radius: 3px;
`;

export const TextDecription = styled.Text`
    font-size: 20px;
    color: ${props => props.theme.textColor};
`;