import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const AddressesHeaderSafe = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 24px;
`;


export const AddressesHeaderButton = styled.TouchableOpacity``;

export const AddressesHeaderLabel = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.body_bold};
`;

export const AddressesHeaderButtonPlus = styled.TouchableOpacity`
  width: ${RFValue(24)}px;
  height: ${RFValue(24)}px;
  border: 3px solid ${({ theme }) => theme.colors.orange_60};
  border-radius: ${RFValue(10)}px;

  align-items: center;
  justify-content: center;
`;