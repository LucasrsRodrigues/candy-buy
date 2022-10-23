import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import * as S from './styles';
import { useNavigation } from '@react-navigation/native';

export function MembershipHeader() {
  const { goBack } = useNavigation();

  return (
    <S.MembershipHeader>
      <S.MembershipLabel>Membership</S.MembershipLabel>
      <S.MembershipButton onPress={goBack}>
        <Ionicons name="close-sharp" size={24} color="white" />
      </S.MembershipButton>
    </S.MembershipHeader>
  );
}