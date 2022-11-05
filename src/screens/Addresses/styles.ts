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

export const AddressesSelectedName = styled.Text`
  color: ${({ theme }) => theme.colors.yellow_100};
  font-family: ${({ theme }) => theme.fonts.body_bold};
  font-size: ${RFValue(12)}px;
`;

export const AddressesSelectedNumber = styled.Text`
  color: ${({ theme }) => theme.colors.yellow_100};
  font-family: ${({ theme }) => theme.fonts.body_bold};
  font-size: ${RFValue(12)}px;
`;

export const AddressesSelectedInf = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.body_bold};
  color: ${({ theme }) => theme.colors.typography_title};

  max-width: 234px;
`;

export const AddressesTitle = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.fredokaOne};
  color: ${({ theme }) => theme.colors.typography_title};

  margin-top: 24px;
`;

