import React from 'react';

import PremiumBasic from '@assets/images/premium/premium-basic.svg';
import PremiumPlus from '@assets/images/premium/premium-plus.svg';

import * as S from './styles';

interface MembershipOptionProps {
  active: boolean;
  title: string;
  time: string;
  price: string;
}

export function MembershipOption({ active, title, time, price }: MembershipOptionProps) {
  return (
    <S.MembershipOptionContainer active={active}>
      <S.MembershipOptionImage>
        {active ? <PremiumBasic /> : <PremiumPlus />}
      </S.MembershipOptionImage>

      <S.MembershipOptionTexts>
        <S.MembershipOptionTitle active={active}>{title}</S.MembershipOptionTitle>
        <S.MembershipOptionTime active={active}>{time}</S.MembershipOptionTime>
      </S.MembershipOptionTexts>


      <S.MembershipOptionValue active={active}>{price}</S.MembershipOptionValue>
    </S.MembershipOptionContainer>
  );
}