import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const HomeSafe = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }) => theme.colors.default};
`;

export const HomeContainer = styled.ScrollView`
  flex: 1;
`;

export const HomeHeader = styled.View`
  flex-direction: row;

  width: 100%;
  padding:0 20px;

`;

export const HomeHeaderButton = styled.TouchableOpacity``;

export const HomeSection = styled.View`
  padding-left: 20px;
  margin-top: 28px;
`;

export const HomeHero = styled.Text`
  font-family: ${({ theme }) => theme.fonts.fredokaOne};
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.typography_title};
`;

export const HomeLorem = styled.Text`
  font-family: ${({ theme }) => theme.fonts.body_bold};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.typography_caption};
`;


export const HomeCandiesCarrousel = styled.ScrollView`
  margin-top: 18px;
`;

export const HomeCandyCard = styled.View`
  width: ${RFValue(72)}px;
  height: ${RFValue(72)}px;

  background: ${({ theme }) => theme.colors.white};
  border-radius: ${RFValue(12)}px;

  align-items: center;
  justify-content: center;

  margin-right: 12px;
`;

export const HomeCandyImage = styled.Image`
  width: ${RFValue(40)}px;
  height: ${RFValue(44)}px;
`;

export const HomeWrapperCard = styled.View`
  margin-top: ${RFValue(12)}px;
`;
