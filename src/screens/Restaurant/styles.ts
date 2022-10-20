import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const RestaurantSafe = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }) => theme.colors.default};
`;

export const RestaurantContainer = styled.ScrollView`
  padding: 20px;
`;

export const RestaurantHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const RestaurantBackButton = styled.TouchableOpacity``;

export const RestaurantImage = styled.Image`
  width: ${RFValue(9.25)}px;
  height: ${RFValue(16.5)}px;
`;

export const RestaurantHeaderTitle = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.body_bold};
  color: ${({ theme }) => theme.colors.typography_title};
`;

export const RestaurantCard = styled.View`
  padding: 10px 20px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 16px;

  margin-top: 16px;

  flex-direction: row;
  align-items: center;

  justify-content: space-between;
`;

export const RestaurantWrapper = styled.View``;


export const RestaurantCardTitle = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.fredokaOne};
  color: ${({ theme }) => theme.colors.typography_title};
`;

export const RestaurantCardText = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.body_bold};
  color: ${({ theme }) => theme.colors.typography_caption};
  max-width: ${RFValue(171)}px;
`;

export const RestaurantBestsellers = styled.View``;

export const RestaurantBestsellersTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.fredokaOne};
  color: ${({ theme }) => theme.colors.typography_subtitle};
`;

