import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const OnboardingSafe = styled.SafeAreaView`
  flex:1;
  background: ${({ theme }) => theme.colors.default};
`;

export const OnboardingContainer = styled.View`
  flex: 3;
  /* padding:  28px; */
  align-items: center;
`;


export const OnboardingTitle = styled.Text``;

export const RenderSlidesContainer = styled.View`
  flex: 1;
  align-items: center;
`;


export const RenderSlidesTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.fredokaOne};
  font-size: ${RFValue(24)}px;
  color: '#403B36';

`;
export const RenderSlidesText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.fredokaOne};
  font-size: ${RFValue(24)}px;
  color: '#403B36';

`;

export const RenderSlidesImage = styled.Image``;