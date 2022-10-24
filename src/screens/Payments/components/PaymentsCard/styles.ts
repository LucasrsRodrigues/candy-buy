import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface ActiveProp {
  active?: boolean;
}

export const PaymentsCard = styled.View<ActiveProp>`
  background: ${({ theme }) => theme.colors.white};
  width: 100%;
  padding: 20px 16px;
  border-radius: ${RFValue(20)}px;

  flex-direction: row;

  ${({ active, theme }) => active && css`
    border: 4px solid ${theme.colors.orange_40};
    background: #FFE1AE80;
  `};

  margin-bottom:12px;
`;

export const PaymentsCheck = styled.View`
  justify-content: center;
`;

export const PaymentsInfos = styled.View`
  flex: 1;
  margin-left:12px;
`;

export const PaymentsEdit = styled.TouchableOpacity`
  justify-content: center;
`;

export const PaymentsCircle = styled.View<ActiveProp>`
  width: ${RFValue(20)}px;
  height: ${RFValue(20)}px;
  border-radius: 99%;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.white};
  border: ${RFValue(2)}px solid ${({ theme }) => theme.colors.grey_20};

  ${({ active, theme }) => active && css`
    background:#FFE1AE80;
    border: ${RFValue(2)}px solid ${theme.colors.orange_60};
  `};

`;

export const PaymentsDot = styled.View<ActiveProp>`
  width: ${RFValue(10)}px;
  height: ${RFValue(10)}px;
  border-radius: 99%;


  ${({ active, theme }) => active && css`
    background: ${theme.colors.orange_60};
  `};
`;

export const PaymentsWrapper = styled.View`
  flex-direction: row;
`;

export const PaymentsCardNumber = styled.Text<ActiveProp>`
  font-family: ${({ theme }) => theme.fonts.body_extra_bold};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.typography_paragraph};

  ${({ active, theme }) => active && css`
    color: ${theme.colors.orange_100};
  `};
`;

export const PaymentsInfosName = styled.Text<ActiveProp>`
  font-family: ${({ theme }) => theme.fonts.body_bold};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.typography_paragraph};

  ${({ active, theme }) => active && css`
    color: ${theme.colors.orange_100};
  `};
`;

export const PaymentsInfosDate = styled.Text<ActiveProp>`
  font-family: ${({ theme }) => theme.fonts.body_bold};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.typography_paragraph};
  margin-left:12px;

  ${({ active, theme }) => active && css`
    color: ${theme.colors.orange_100};
  `};
`;
