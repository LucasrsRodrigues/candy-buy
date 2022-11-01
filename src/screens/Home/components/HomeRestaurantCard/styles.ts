import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const HomeRestaurantCard = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.white};
  padding: 16px;
  margin-right: 20px;
  flex-direction: row;

  border-radius: 16px;


  align-items: center;
`;

export const HomeRestaurantCardHeartButton = styled.TouchableOpacity`
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