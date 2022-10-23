import styled from "styled-components/native";

export const EditProfileSafe = styled.SafeAreaView`
  flex:1;

  background: ${({ theme }) => theme.colors.default};
`;

export const EditProfileContainer = styled.ScrollView`
  padding: 0 24px;
`;