import styled from 'styled-components/native';

export const DeckContainer = styled.TouchableOpacity`
    justify-content: space-around;
    padding-horizontal: 15px;
    width: 100%;
    height: 100px;
    margin-bottom: 14px;
    border-radius: 3px;
`;

export const DeckHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const DeckPlusIcon = styled.TouchableOpacity``;

export const DeckBottom = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center
`;

export const DeckBottomTotalCards = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const DeckLike = styled.TouchableOpacity``;