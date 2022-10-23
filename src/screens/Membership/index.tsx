import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { MembershipHeader } from './components/MembershipHeader';

import Unicorn from '@assets/images/unicornio_boia.svg';
import { MembershipOption } from './components/MembershipOption';
import { DokiButton } from '@components/DokiButton';

import * as S from './styles';

export function Membership() {

  return (
    <S.MembershipSafe>
      <MembershipHeader />

      <S.MembershipContainer>
        <Unicorn width={RFValue(120)} height={RFValue(124)} />

        <S.MembershipText>
          Upgrade to premium membership and enjoy!
        </S.MembershipText>

        <MembershipOption title="Doki Pro" time="Monthly Plan" price="$4.99" active={true} />
        <MembershipOption title="Doki Super" time="Monthly Plan" price="$29.99" active={false} />

        <S.MembershipLorem>
          Subscriptions Will Be Auto Renewed Every{'\n'}
          Month. You can cancel anytime.
        </S.MembershipLorem>

        <DokiButton label='Subscribe' />

      </S.MembershipContainer>
    </S.MembershipSafe>

  );
}