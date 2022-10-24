import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const NoSavedCardsContainer = styled.View`
  justify-content: center;
  padding: 27px;
  flex: 1;
`;

export const NoSavedCardsContent = styled.View`
  flex :1;
  align-items: center;
  justify-content: center;
`;

export const NoSavedCardsTitle = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.fredokaOne};
  color: ${({ theme }) => theme.colors.typography_title};
  text-align: center;
  margin-top: 40px;
`;

export const NoSavedCardsText = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.body_bold};
  color: ${({ theme }) => theme.colors.typography_paragraph};
  text-align: center;

  margin-top: 8px;
`;