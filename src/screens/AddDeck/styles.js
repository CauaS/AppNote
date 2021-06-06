import styled from 'styled-components/native';

export const AddDeckContainer = styled.View`
   flex: 1
`;

export const AddDeckContent = styled.View`
    padding: 25px;
    height: 200px;
    width: 80%; 
    background-color:black; 
    position: absolute;
    bottom: 0px;
    left: 42px;
    right: 0px;
    top: 200px; 
    border-radius: 3px;
`;

export const DeckNomeInput = styled.TextInput`
    color: #fff; 
    padding-bottom: 8px; 
    padding-left: 2px; 
    font-size: 20px;
`;

export const BotaoCriar = styled.TouchableOpacity`
    background-color: ${props => props.theme.color};
    margin-top: 10px;
    padding: 5px;
    align-items: center;
    border-radius: 3px;
`;

export const ModalTitle = styled.View`
    margin-bottom: 25px;
`;
export const TextModal = styled.Text`
    font-size: 20px;
    color: #fff;
`;
export const ModalBody = styled.View`
    margin-top: 20px;
`;
