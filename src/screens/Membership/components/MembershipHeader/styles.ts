import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const MembershipHeader = styled.View`
  flex-direction: row;
  padding:8px 12px;
`;

export const MembershipLabel = styled.Text`
  flex: 1;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.body_bold};
  color: ${({ theme }) => theme.colors.typography_title};
  text-align: center;
`;

export const MembershipButton = styled.TouchableOpacity`
  width: ${RFValue(20)}px;
  height: ${RFValue(20)}px;

  background: ${({ theme }) => theme.colors.grey_60};
  border-radius: 8px;
  align-items: center;
`;