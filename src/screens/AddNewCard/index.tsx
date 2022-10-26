import React, { useState } from 'react';
import UnicornAlerta from '@assets/images/unicornAlerta.svg';
import { InternalHeader } from '@components/InternalHeader';
import { DokiInput } from '@components/DokiInput';
import { DokiButton } from '@components/DokiButton';
import { FontAwesome5 } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';
import api from 'src/service/api';

import * as S from './styles';

export function AddNewCard() {
  const [nameOnCard, setNameOnCard] = useState('');
  const [expirationDate, setExpirationDate] = useState('');

  const theme = useTheme();

  async function addCard() {
    const response = await api.post('/payments');
  }

  return (
    <S.AddNewCardSafe>
      <InternalHeader label="Add New Card" />
      <S.AddNewCardContainer>
        <S.AddNewCardAlert>
          <S.AddNewCardAlertText>
            Your banking and card{'\n'}
            details are safe, secure,{'\n'}
            and eend-to-end{'\n'}
            encrypted.
          </S.AddNewCardAlertText>
          <UnicornAlerta width={RFValue(91)} height={RFValue(110)} />
        </S.AddNewCardAlert>

        <S.AddNewCardForm>
          <DokiInput name='name_on_card' placeholder='Name on Card' />
          <DokiInput name='expiration_date' placeholder='Expiration Date (MM/YY)' />

          <S.AddNewCardCheck>
            <S.AddNewCardCheckbox>
              <FontAwesome5 name="check" size={RFValue(13)} color={theme.colors.orange_60} />
            </S.AddNewCardCheckbox>
            <S.AddNewCardText>Set as default address for all the future{'\n'}food orders.</S.AddNewCardText>
          </S.AddNewCardCheck>
        </S.AddNewCardForm>

        <DokiButton label='Save' onPress={addCard} />

      </S.AddNewCardContainer>

    </S.AddNewCardSafe>

  );
}