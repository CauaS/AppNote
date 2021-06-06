import styled from 'styled-components/native';

export const HomeContainer = styled.View`
    flex: 1;
    padding: 20px;
    background-color: ${props => props.theme.background};
`;

export const HomeHeader = styled.View`
    margin-bottom: 25px;
`;

export const HomeHeaderContent = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const HomeHeaderTitle = styled.View``;

export const HomeHeaderText = styled.Text`
    color: ${props => props.theme.textColor};
    font-family: 'RobotoMono_500Medium';
    font-size: 25px;
`;

export const HomeHeaderIconArea = styled.View`
    flex-direction: row;
`;

export const HomeHeaderIconTheme = styled.TouchableOpacity`
    background-color: 'rgba(46, 49, 49, 0.8)';
    padding: 7px;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
`;

export const HomeHeaderIconPlus = styled.TouchableOpacity`
    padding: 7px;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
`;