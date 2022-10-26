import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const AddressesSafe = styled.SafeAreaView`
  flex:1;
  background: ${({ theme }) => theme.colors.default};
`;

export const AddressesContainer = styled.View`
  padding: 16px;
`;

export const AddressesSelected = styled.View`
  width: 100%;
  padding: 16px;
  background: ${({ theme }) => theme.colors.yellow_40}50;
  border-radius: ${RFValue(12)}px;
`;

export const AddressesSelectedName = styled.Text``;
export const AddressesSelectedNumber = styled.Text``;