import { Platform } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const LoginSafe = styled.SafeAreaView`
  flex:1;
  background: ${({ theme }) => theme.colors.default};
`;

export const LoginContainer = styled.View`
  flex:1;

  align-items: center;
  justify-content: space-between;
  padding: ${Platform.OS === 'android' ? RFValue(40) : 25}px 32px;
`;

export const LoginLorem = styled.View`
  align-items: center;
`;

export const LoginForm = styled.View`
  width: 100%;  
  /* flex: 1; */
`;

export const LoginLoremTitle = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.balloo};
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.typography_title};
`;

export const LoginLoremText = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.body_bold};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.typography_paragraph};
`;


export const LoginForgotButton = styled.TouchableOpacity``;

export const LoginForgotButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.orange_60};
  font-family: ${({ theme }) => theme.fonts.body_bold};
  font-size: ${RFValue(14)}px;
  text-align: right;
`;
