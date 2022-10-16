import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const SignUpSafe = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }) => theme.colors.default};
`;

export const SignUpContainer = styled.View`
  flex:1;
  align-items: center;

  padding: 25px 32px;

  justify-content: space-between;
`;

export const SignUpWrapper = styled.View`
  align-items: center;
  width: 100%;
  
`;

export const SignUpTitle = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.balloo};
  color: ${({ theme }) => theme.colors.typography_title};
`;

export const SignUpText = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.body_bold};
  color: ${({ theme }) => theme.colors.typography_paragraph};

  text-align: center;

`;

export const SignUpButton = styled.TouchableOpacity`
  margin-top: 16px;
`;

export const SignUpButtonText = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.body_bold};
  color: ${({ theme }) => theme.colors.orange_60};
`;