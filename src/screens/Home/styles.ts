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


export const HomeRestaurantCard = styled.View`
  background: ${({ theme }) => theme.colors.white};
  padding: 16px;
  margin-right: 20px;
  flex-direction: row;

  border-radius: 16px;


  align-items: center;
`;

export const HomeRestaurantCardHeartButton = styled.TouchableHighlight`
  position: absolute;
  top: ${RFValue(20)}px;
  right: ${RFValue(15)}px;
`;

export const HomeRestaurantCardInfos = styled.View`
  margin-left: 16px;
`;

export const HomeRestaurantCardImage = styled.Image`
  width: ${RFValue(89)}px;
  height: ${RFValue(105)}px;
`;

export const RestaurantCardTime = styled.Text`
  font-family: ${({ theme }) => theme.fonts.body_bold};
  color: ${({ theme }) => theme.colors.orange_80};
  font-size: ${RFValue(10)}px;
`;
export const RestaurantCardName = styled.Text`
font-family: ${({ theme }) => theme.fonts.fredokaOne};
  color: ${({ theme }) => theme.colors.typography_title};
  font-size: ${RFValue(20)}px;
`;
export const RestaurantCardText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.body_bold};
  color: ${({ theme }) => theme.colors.typography_paragraph};
  font-size: ${RFValue(14)} px;
  max-width: ${RFValue(169)}px;
`;