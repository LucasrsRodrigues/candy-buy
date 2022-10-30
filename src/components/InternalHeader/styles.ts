import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const InternalHeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  /* padding: 20px; */

  align-items: center;
`;

export const InternalHeaderBackButton = styled.TouchableOpacity``;

export const InternalHeaderImage = styled.Image`
  width: ${RFValue(9.25)}px;
  height: ${RFValue(16.5)}px;
`;

export const InternalHeaderTitle = styled.Text`
  flex :1;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.body_bold};
  color: ${({ theme }) => theme.colors.typography_title};
  text-align: center;
`;