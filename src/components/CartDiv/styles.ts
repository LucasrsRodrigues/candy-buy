import { getBottomSpace } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const CartDivContainer = styled.TouchableOpacity`
  width: 100%;
  height: ${RFValue(57) + getBottomSpace()}px;
  background: ${({ theme }) => theme.colors.orange_60};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 19px 20px;
`;

export const CartDivQuantity = styled.Text`
  font-family: ${({ theme }) => theme.fonts.body_bold};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.white};
`;

export const CartDivButton = styled.View`
  flex-direction: row;
  align-items: center;

`;

export const CartDivButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.body_bold};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.white};

  margin-left: 6px;
`;