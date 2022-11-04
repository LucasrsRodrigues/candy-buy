import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const MyOrdersSafe = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }) => theme.colors.default};
`;
export const MyOrdersWrapper = styled.View`
  width: 100%;
  padding: 10px 20px;
`;

export const MyOrdersContainer = styled.View`
  flex: 1;
`;

