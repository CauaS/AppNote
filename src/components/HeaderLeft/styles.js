import styled from 'styled-components/native';

export const DeckHeaderContainer = styled.View`
    flex-direction: row;
    margin-right: 20px;
`;

export const DeckHeaderLength = styled.View`
    margin-right: 50px;
    flex-direction: row;
`;

export const TotalCars = styled.TextInput`
    color: ${props => props.theme.color};
    font-size: 20px; 
    font-weight: bold;
`;

export const CardCount = styled.TextInput`
    color: ${props => props.theme.textColor};
    font-size: 20px; 
    font-weight: bold;
`;


export const DeckHeaderIcon = styled.TouchableOpacity``;