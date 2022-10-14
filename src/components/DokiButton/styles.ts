import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
  width: 100%;
  background: ${({ theme }) => theme.colors.orange_60};
  padding: 19.5px;
  border-radius: 12px;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.fredoka_bold};
  font-size: 18px;
  text-align: center;
`;