import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const CartToastContainer = styled.View`
  flex-direction: row;

  align-items: center;
  /* justify-content: space-between; */
  margin-top: 16px;
`;

export const CartToastImage = styled.Image`
  /* background: ${({ theme }) => theme.colors.white}; */
  width: ${RFValue(52)}px;
  height: ${RFValue(52)}px;

  /* border-radius: ${RFValue(12)}px; */
`;


export const CartToastInfos = styled.View`
  margin-left: ${RFValue(8)}px;
`;

export const CartRight = styled.View`
  margin-left: auto;
`;

export const CartValue = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.body_bold};
  color: ${({ theme }) => theme.colors.typography_subtitle};
  text-align: right;
`;

export const CartToastTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.body_bold};
  color: ${({ theme }) => theme.colors.typography_caption};
`;

export const CartToastPrice = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.body_bold};
  color: ${({ theme }) => theme.colors.typography_paragraph};
`;

export const CartToastButton = styled.View`
  /* background: ${({ theme }) => theme.colors.orange_60}; */
  /* padding:8.5px 28px; */
  /* border-radius: ${RFValue(8)}px; */
  flex-direction: row;
  align-items: center;
  background: ${({ theme }) => theme.colors.orange_60};
  border-radius: ${RFValue(15)}px;

`;

export const CartToastButtonText = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.body_bold};
  color: ${({ theme }) => theme.colors.white};
  padding: 8px;
`;

export const CartToastButtonAction = styled.TouchableOpacity`
  padding: 14px 8px;

  background: ${({ theme }) => theme.colors.orange_60};
  border-radius: ${RFValue(15)}px;
`;