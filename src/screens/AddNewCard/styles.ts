import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const AddNewCardSafe = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }) => theme.colors.default};
`;

export const AddNewCardContainer = styled.ScrollView`
  padding: 0 24px;
`;

export const AddNewCardAlert = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 9px 24px;
  background: ${({ theme }) => theme.colors.yellow_40}80;
  border-radius: 16px;

  justify-content: space-between;
`;

export const AddNewCardAlertText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.body_bold};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.yellow_100};
`;

export const AddNewCardCheckbox = styled.View`
  width: ${RFValue(20)}px;
  height: ${RFValue(20)}px;
  border: ${RFValue(2)}px solid ${({ theme }) => theme.colors.orange_60};
  border-radius: ${RFValue(4)}px;

  align-items: center;
  justify-content: center;
`;


export const AddNewCardForm = styled.View`
  margin-top: 100px;
  margin-bottom: 100px;
`;

export const AddNewCardCheck = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const AddNewCardText = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.typography_caption};
  font-family: ${({ theme }) => theme.fonts.body_bold};
  margin-left: 12px;
`;