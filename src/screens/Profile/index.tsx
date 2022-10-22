import React from 'react';
import { InternalHeader } from '@components/InternalHeader';
import ProfilePic from '@assets/images/user-avatar.svg';

import { RFValue } from 'react-native-responsive-fontsize';
import { DokiButton } from '@components/DokiButton';
import { Octicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import UnicornBoia from '@assets/images/unicornio_boia.svg';

import { FontAwesome5 } from '@expo/vector-icons';

import * as S from './styles';

export function Profile() {
  const theme = useTheme();

  return (
    <S.ProfileSafe>
      <InternalHeader label='Profile' />
      <S.ProfileContainer>
        <S.ProfileData>
          <S.ProfileAvatar>
            <ProfilePic width={RFValue(130.61)} height={RFValue(214.63)} />
          </S.ProfileAvatar>

          <S.ProfileName>Shambhavi Mishra</S.ProfileName>

          <S.ProfilePhoneNumberContainer>
            <S.ProfilePhoneNumber>+91 12234 57789</S.ProfilePhoneNumber>
          </S.ProfilePhoneNumberContainer>
        </S.ProfileData>

        <S.Premium>
          <S.PremiumLeft>
            <S.PremiumLabel>
              Become a pro member and {'\n'}
              unlock premium benefits.
            </S.PremiumLabel>
            <DokiButton label='Learn More' rightIcon='chevron-right' />
          </S.PremiumLeft>

          <S.PremiumRight>
            <UnicornBoia width={RFValue(81)} height={RFValue(84)} />
          </S.PremiumRight>
        </S.Premium>

        <S.ProfileOption>
          <FontAwesome5 name="user-alt" size={24} color={theme.colors.grey_60} />
          <S.ProfileLabel>Edit Profile</S.ProfileLabel>
          <Octicons name="chevron-right" size={RFValue(20)} color={theme.colors.grey_20} style={{ marginLeft: 'auto' }} />
        </S.ProfileOption>

        <S.ProfileOption>
          <FontAwesome5 name="user-alt" size={24} color={theme.colors.grey_60} />
          <S.ProfileLabel>Payments</S.ProfileLabel>
          <Octicons name="chevron-right" size={RFValue(20)} color={theme.colors.grey_20} style={{ marginLeft: 'auto' }} />
        </S.ProfileOption>

        <S.ProfileOption>
          <FontAwesome5 name="user-alt" size={24} color={theme.colors.grey_60} />
          <S.ProfileLabel>Addresses</S.ProfileLabel>
          <Octicons name="chevron-right" size={RFValue(20)} color={theme.colors.grey_20} style={{ marginLeft: 'auto' }} />
        </S.ProfileOption>

        <S.ProfileOption>
          <FontAwesome5 name="user-alt" size={24} color={theme.colors.grey_60} />
          <S.ProfileLabel>Log Out</S.ProfileLabel>
          <Octicons name="chevron-right" size={RFValue(20)} color={theme.colors.grey_20} style={{ marginLeft: 'auto' }} />
        </S.ProfileOption>
      </S.ProfileContainer>
    </S.ProfileSafe>
  );
}