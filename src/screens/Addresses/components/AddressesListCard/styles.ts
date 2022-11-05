import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const AddressesListCard = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
`;
export const AddressesListInfos = styled.View``;

export const AddressesListInfosHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const AddressesName = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.body_bold};
  color:${({ theme }) => theme.colors.typography_subtitle};
`;

export const AddressesListInf = styled.Text`
  margin-top: ${RFValue(4)}px;
  font-family: ${({ theme }) => theme.fonts.body_bold};
  color:${({ theme }) => theme.colors.typography_paragraph};

  max-width: 265px;
`;


export const AddressesListCardButton = styled.TouchableOpacity`
  border: ${RFValue(3)}px solid ${({ theme }) => theme.colors.orange_60};
  border-radius: ${RFValue(14)}px;
  width: ${RFValue(131)}px;
  padding:${RFValue(8.5)}px;

  margin-top: 12px;
`;

export const AddressesListCardButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.body_bold};
  color:${({ theme }) => theme.colors.orange_60};
  text-align: center;
`;

export const AddressesEditButton = styled.TouchableOpacity``;