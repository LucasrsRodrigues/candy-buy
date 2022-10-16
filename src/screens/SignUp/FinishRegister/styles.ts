import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const FinishRegisterSafe = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }) => theme.colors.default};
`;

export const FinishRegisterContainer = styled.View`
  flex:1;
  align-items: center;

  padding: 25px 32px;

  justify-content: space-between;
`;

export const FinishRegisterWrapper = styled.View`
  align-items: center;
  width: 100%;
`;

export const FinishRegisterTitle = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.balloo};
  color: ${({ theme }) => theme.colors.typography_title};
`;

export const FinishRegisterText = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.body_bold};
  color: ${({ theme }) => theme.colors.typography_paragraph};

  text-align: center;
`;
