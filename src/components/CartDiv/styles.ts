import { getBottomSpace } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const CartDivContainer = styled.TouchableOpacity`
  position: absolute;
  bottom: ${RFValue(25)}px;
  right: ${RFValue(20)}px;

  width: 50px;
  height: 50px;
  border-radius: 50%;

  background: ${({ theme }) => theme.colors.orange_60};
  align-items: center;
  justify-content: center;
`;

export const CartDivQuantityContainer = styled.View`
  position: absolute;
  top: -${RFValue(12)}px;
  left: -${RFValue(5)}px;
  border-radius: 90%;
  background: #000;

  width: ${RFValue(23)}px;
  height: ${RFValue(23)}px;
  align-items: center;
  justify-content: center;
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