import { Animated, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

TouchableOpacity.defaultProps = { activeOpacity: 0.7 };

export const QuestionContainer = styled.View`
    flex: 1;
    padding: 20px;
    background-color: #000;
    justify-content: space-around;
    align-items: center;
`;

export const Middle = styled.View`
    width: 100%; 
    height: 50%; 
    justify-content: center;
    align-items: center;
`;

export const Word = styled(Animated.Text)`
    color: #fff;
    font-size: 24px;
    font-family: 'RobotoMono_500Medium';
`;

export const ActionButton = styled.TouchableOpacity`
    padding: 15px;
    border-radius: 5px;
    margin-top: 50px;
`;