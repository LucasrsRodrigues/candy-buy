import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const MembershipSafe = styled.SafeAreaView`
  flex:1;
  background: ${({ theme }) => theme.colors.default};
`;

export const MembershipContainer = styled.View`
  align-items: center;

  padding:45px 24px;
`;

export const MembershipText = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.fredokaOne};
  text-align: center;
  color: ${({ theme }) => theme.colors.typography_title};
  margin-top: 16px;
`;

export const MembershipLorem = styled.Text`
  text-align: center;
`;