import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const PaymentsSafe = styled.SafeAreaView`
  flex:1;
  background: ${({ theme }) => theme.colors.default};
`;

export const PaymentsContainer = styled.ScrollView``;



export const PaymentsCard = styled.View`
  background: ${({ theme }) => theme.colors.white};
  width: 100%;
  padding: 20px 16px;
  border-radius: 20px;

  flex-direction: row;
`;

export const PaymentsCheck = styled.View``;

export const PaymentsInfos = styled.View`
  flex: 1;
`;

export const PaymentsEdit = styled.TouchableOpacity``;

export const PaymentsCircle = styled.View`
  width: ${RFValue(20)}px;
  height: ${RFValue(20)}px;
  border-radius: 99%;
  align-items: center;
  justify-content: center;

  // Checked
  background: ${({ theme }) => theme.colors.orange_60};
  border: ${RFValue(2)}px solid ${({ theme }) => theme.colors.orange_60};

  // Not Checked
  /* background: ${({ theme }) => theme.colors.white};
  border: ${RFValue(2)}px solid ${({ theme }) => theme.colors.grey_20}; */
`;

export const PaymentsDot = styled.View`
  width: ${RFValue(10)}px;
  height: ${RFValue(10)}px;
  border-radius: 99%;

  background: ${({ theme }) => theme.colors.orange_60};
`;


export const PaymentsWrapper = styled.View`
  flex-direction: row;
`;

export const PaymentsCardNumber = styled.Text`
  font-family: ${({ theme }) => theme.fonts.body_bold};
`;

export const PaymentsInfosName = styled.Text``;

export const PaymentsInfosDate = styled.Text``;
