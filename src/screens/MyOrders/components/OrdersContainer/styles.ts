import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const OrdersContainer = styled.ScrollView`
  flex:1;
`;

export const MyOrdersCard = styled.View`
  width: 100%;
  /* background: ${({ theme }) => theme.colors.white}; */
  padding: 16px;
  border-radius: 12px;
`;

export const MyOrdersCardHeader = styled.View`
  background: ${({ theme }) => theme.colors.green_20};
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  
  padding: 16px;
  /* border-radius: 12px 12px 0 0; */
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;


export const MyOrdersCardHeaderStatus = styled.View``;

export const MyOrdersCardHeaderBox = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const MyOrdersCardHeaderBoxText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.body_bold};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.green_80};

  margin-left: ${RFValue(4)}px;
`;

export const MyOrdersCardHeaderTime = styled.Text`
  font-family: ${({ theme }) => theme.fonts.body_bold};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.green_80};
`;

export const MyOrdersCardIten = styled.View`
  flex-direction: row;
  justify-content: space-between;

  align-items: center;
  padding: 12px 0;

  /* border-bottom: 2px solid red; */

  border-bottom-color: ${({ theme }) => theme.colors.grey_05};
  border-bottom-width: 2px;
  border-bottom-style: dashed;
`;

export const MyOrdersCardItenName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.body_bold};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.typography_subtitle};
`;


export const MyOrdersCardItenAmount = styled.View``;

export const MyOrdersCardItenAmountValue = styled.Text`
  text-align: right;
  font-family: ${({ theme }) => theme.fonts.body_bold};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.typography_subtitle};
`;

export const MyOrdersCardItenAmountQuantity = styled.Text`
  text-align: right;

  text-align: right;
  font-family: ${({ theme }) => theme.fonts.body_bold};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.typography_caption};
`;

export const MyOrdersFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;

  background: ${({ theme }) => theme.colors.white};

  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;

  padding: 16px;
`;

export const MyOrdersFooterLabel = styled.Text`
  text-align: right;
  font-family: ${({ theme }) => theme.fonts.body_bold};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.typography_title};
`;

export const MyOrdersFooterValue = styled.Text`
  text-align: right;
  font-family: ${({ theme }) => theme.fonts.body_bold};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.typography_title};
`;

export const MyOrdersCardBody = styled.View`
  background: ${({ theme }) => theme.colors.white};
  padding: 16px;
`;