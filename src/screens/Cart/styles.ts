import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const CartSafe = styled.SafeAreaView`
  flex:1;
  background: ${({ theme }) => theme.colors.default};
`;

export const CartWrapper = styled.View`
  padding: 15px 24px;
`;

export const CartContainer = styled.ScrollView`
  padding: 20px;
`;

export const CartInfoSpace = styled.View`
  margin: ${RFValue(5)}px 0;
`;

export const CartInfo = styled.View`
  width: 100%;
  height: ${RFValue(287)}px;
  border-top-left-radius: ${RFValue(40)}px;
  border-top-right-radius: ${RFValue(40)}px;
  background: ${({ theme }) => theme.colors.white};

  padding: 40px 28px;
`;

export const CartInfoRow = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const CartSubtext = styled.Text`
  font-family: ${({ theme }) => theme.fonts.body_bold};
  font-size: ${RFValue(15)}px;
  color:${({ theme }) => theme.colors.typography_caption};
`;

export const CartValue = styled.Text`
  font-family: ${({ theme }) => theme.fonts.body_bold};
  font-size: ${RFValue(15)}px;
  color:${({ theme }) => theme.colors.typography_caption};
`;

export const CartSubtextStrong = styled.Text`
  font-family: ${({ theme }) => theme.fonts.body_bold};
  font-size: ${RFValue(17)}px;
  color:${({ theme }) => theme.colors.typography_paragraph};
`;

export const CartValueStrong = styled.Text`
  font-family: ${({ theme }) => theme.fonts.body_bold};
  font-size: ${RFValue(17)}px;
  color:${({ theme }) => theme.colors.typography_paragraph};
`;