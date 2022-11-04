import { Marker } from "react-native-maps";
import styled from "styled-components/native";

export const DestinationMarkerContainer = styled(Marker)``;

export const DestinationMarkerDot = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

export const DestinationMarkerSla = styled.View`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.orange_60};
`;