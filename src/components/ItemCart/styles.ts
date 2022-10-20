import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

// Item
export const ItemCart = styled.View`
  flex-direction: row;

  align-items: center;
  /* justify-content: space-between; */
  margin-top: 16px;
`;

export const ItemCartImage = styled.Image`
  background: ${({ theme }) => theme.colors.white};
  width: ${RFValue(52)}px;
  height: ${RFValue(52)}px;

  border-radius: ${RFValue(12)}px;
`;


export const ItemCartInfos = styled.View`
  margin-left: ${RFValue(8)}px;
`;

export const ItemCartTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.body_bold};
  color: ${({ theme }) => theme.colors.typography_subtitle};
`;

export const ItemCartPrice = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.body_bold};
  color: ${({ theme }) => theme.colors.typography_paragraph};
`;

export const ItemCartButton = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.orange_60};
  padding:8.5px 28px;
  border-radius: ${RFValue(8)}px;

  margin-left: auto;
`;

export const ItemCartButtonText = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.body_bold};
  color: ${({ theme }) => theme.colors.white};
`;