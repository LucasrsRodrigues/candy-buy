import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const RenderSlidesContainer = styled.View`
  flex: 1;
  align-items: center;
  padding: 25px;

  width: 100%;

`;
export const RenderSlidesImage = styled.Image`
  width: ${RFValue(265.35)}px;
  height: ${RFValue(259)}px
`;

export const RenderSlidesWrapper = styled.View``;

export const RenderSlidesTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.fredokaOne};
  font-size: ${RFValue(24)}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.typography_title};
`;

export const RenderSlidesText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.body_regular};
  font-size: ${RFValue(16)}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.typography_paragraph};
`;