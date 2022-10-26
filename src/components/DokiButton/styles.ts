import styled, { css } from "styled-components/native";

interface ButtonProps {
  type: 'bold' | 'outline';
}

export const Button = styled.TouchableOpacity<ButtonProps>`
  width: 100%;
  padding: 19.5px;
  border-radius: 12px;

  background: #fff;

  ${props => props.type === 'bold' && css`background: ${({ theme }) => theme.colors.orange_60};`}

  ${props => props.type === 'outline' && css`
    border: 4px solid ${({ theme }) => theme.colors.orange_60};
  `};

  flex-direction: row;
  align-items: center;
`;


export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.fredoka_bold};
  font-size: 18px;
  text-align: center;

  flex: 1;
`;