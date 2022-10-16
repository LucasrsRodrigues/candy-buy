import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const CodeSafe = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }) => theme.colors.default};
`;

export const CodeContainer = styled.View`
  flex:1;
  align-items: center;

  padding: 25px 32px;

  justify-content: space-between;
`;

export const CodeWrapper = styled.View`
  align-items: center;
  width: 100%;
  
`;

export const CodeTitle = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.balloo};
  color: ${({ theme }) => theme.colors.typography_title};
`;

export const CodeText = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.body_bold};
  color: ${({ theme }) => theme.colors.typography_paragraph};

  text-align: center;
`;

export const CodeButton = styled.TouchableOpacity`
  margin-top: 16px;
`;

export const CodeButtonText = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.body_bold};
  color: ${({ theme }) => theme.colors.orange_60};
`;

export const CodeInput = styled.TextInput`
  width: 0;
  height: 0;
`;

export const CodeWrapperNumbers = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const CodeCellView = styled.View`
  width: ${RFValue(64)}px;
  height: ${RFValue(64)}px;

  background: ${({ theme }) => theme.colors.white};
  border: 2px solid #F2ECE6;
  border-radius: ${RFValue(16)}px;

  align-items: center;
  justify-content: center;

`;

export const CodeCellText = styled.Text`
  font-size: ${RFValue(28)}px;
  font-family: ${({ theme }) => theme.fonts.body_bold};
  color: ${({ theme }) => theme.colors.typography_caption};
`;