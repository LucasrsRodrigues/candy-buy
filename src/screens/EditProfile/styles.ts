import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const EditProfileSafe = styled.SafeAreaView`
  flex:1;

  background: ${({ theme }) => theme.colors.default};
`;

export const EditProfileContainer = styled.View`
  padding: 15px 24px;
  flex: 1;
`;


export const EditProfileForm = styled.View`
  flex: 1;
  margin-top: ${RFValue(24)}px;
`;