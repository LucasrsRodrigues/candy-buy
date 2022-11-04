import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const ProfileWrapper = styled.View`
    padding: 15px 24px;
`;

export const ProfileSafe = styled.SafeAreaView`
  flex:1;
  background: ${({ theme }) => theme.colors.default};
`;

export const ProfileContainer = styled.ScrollView`
  padding: 0 16px;
`;

export const ProfileData = styled.View`
  width: 100%;
  align-items: center;

`;

export const ProfileAvatar = styled.View`
  width: ${RFValue(136)}px;
  height: ${RFValue(136)}px;
  overflow: hidden;
  border-radius: 99%;

  background: ${({ theme }) => theme.colors.yellow_40};

  align-items: center;
  padding: 10px 0;

  margin-bottom: 16px;
`;

export const ProfileName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.fredokaOne};
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.typography_title};
`;

export const ProfilePhoneNumberContainer = styled.View`
  background: ${({ theme }) => theme.colors.orange_40};
  padding: ${RFValue(5)}px ${RFValue(6)}px;
  border-radius: ${RFValue(6)}px;

  margin-top: ${RFValue(8)}px;
`;

export const ProfilePhoneNumber = styled.Text`
  font-family: ${({ theme }) => theme.fonts.body_bold};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.orange_80};
`;

export const Premium = styled.View`
  width: 100%;
  background: ${({ theme }) => theme.colors.yellow_40};
  padding: 20px 24px;
  border-radius: 16px;

  margin-top: 32px;

  flex-direction: row;
  justify-content: space-between;
`;

export const PremiumLeft = styled.View``;

export const PremiumRight = styled.View``;

export const PremiumLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.body_bold};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.orange_100};
`;

export const ProfileOption = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;

  padding: 20px 18px;
`;

export const ProfileLabel = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.body_bold};
  color: ${({ theme }) => theme.colors.typography_subtitle};

  margin-left: 8px;
`;