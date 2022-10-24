import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const PaymentsSafe = styled.SafeAreaView`
  flex:1;
  background: ${({ theme }) => theme.colors.default};
`;

export const PaymentsContainer = styled.ScrollView``;

export const PaymentsContent = styled.View`
  padding: 0 20px;
`;
