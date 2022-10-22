import React, { useEffect, useRef, useState } from 'react';

import LogoSvg from '@assets/images/logo.svg';
import Doki from '@assets/images/doki-doki/forgotPasswordChild.svg';

// import phoneIcon from '@assets/icons/phone/phone.png';

import * as S from './styles';
import { Dokinput } from '@components/DokInput';
import { DokiButton } from '@components/DokiButton';
import { useNavigation } from '@react-navigation/native';

export function Code() {
  let codeRef = useRef(null);
  const [internalVal, setInternalVal] = useState('');
  const [focusInput, setFocusInput] = useState(true);

  const { navigate, goBack } = useNavigation();

  const lengthInput = 4;


  const onChangeText = (val) => {
    setInternalVal(val);

    if (val.length === lengthInput) {
      // navigation.navigate('')
    }
  };

  const onPressContinue = () => { };

  const onChangeFocus = () => {
    setFocusInput(true)
  };

  const onChangeBlur = () => {
    setFocusInput(false)
  };

  useEffect(() => {
    codeRef.current.focus();
  }, []);


  return (
    <S.CodeSafe>
      <S.CodeContainer>
        <LogoSvg width={160} height={32} />
        <Doki width={250} height={250} />

        <S.CodeWrapper>
          <S.CodeTitle>One Last Step</S.CodeTitle>
          <S.CodeText>Enter the four secret digits we just send to the given mobile number.</S.CodeText>
        </S.CodeWrapper>

        <S.CodeWrapperNumbers>
          <S.CodeInput
            ref={codeRef}
            onChangeText={onChangeText}
            value={internalVal}
            maxLenght={lengthInput}
            returnKeyType="done"
            keyboardType="numeric"
          />

          {
            Array(lengthInput).fill().map((data, index) => (
              <S.CodeCellView key={index}>
                <S.CodeCellText>
                  {internalVal && internalVal.length > 0 ? internalVal[index] : ""}
                </S.CodeCellText>
              </S.CodeCellView>
            ))
          }

        </S.CodeWrapperNumbers>

        <S.CodeWrapper>
          <DokiButton label="Next" onPress={() => navigate('FinishRegister')} />

          <S.CodeButton onPress={goBack}>
            <S.CodeButtonText>Go back</S.CodeButtonText>
          </S.CodeButton>
        </S.CodeWrapper>
      </S.CodeContainer>
    </S.CodeSafe>
  );
}