import styled from 'styled-components/native';

export const Wrapper = styled.View`
    background-color: ${({ theme }) => theme.colors.background};
    flex: 1;
    justify-content: center;
`;

export const Button = styled.TouchableOpacity`
    height: 30px;
    background-color: aqua;
    align-self: center;
    justify-content: center;
    padding-left: 20px;
    padding-right: 20px;
`;

export const ButtonTitle = styled.Text`
    text-align: center;

`;