import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const SEHomeRestaurantCardContainer = styled.View`
  background: #a0a0a0;
  border-color: #b0b0b0;
  height: 174px;
  width: ${Dimensions.get('window').width * 0.9}px;

  border-radius: 9px;

  overflow: hidden;
`;