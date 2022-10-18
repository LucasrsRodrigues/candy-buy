import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import theme from "../../global/styles/theme";


interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const DokInputContainer = styled.View<ContainerProps>`
  /* width: 100%; */
  flex: 1;
  background: ${({ theme }) => theme.colors.white};
  height: ${RFValue(64)}px;

  border: 2px solid ${({ theme }) => theme.colors.grey_05};
  border-radius: 16px;

  flex-direction: row;
  align-items: center;

  margin-bottom: 12px;

  ${props => props.isErrored
    && css`
      border-color: #c53030;
    `};
  ${props => props.isFocused
    && css`
      border-color: ${({ theme }) => theme.colors.grey_20};
    `};

`;


export const DockTextInput = styled.TextInput.attrs({
  placeholderTextColor: theme.colors.typography_subtitle
})`
  flex: 1;
  padding: 0 16px;
  font-family: ${({ theme }) => theme.fonts.body_bold};
  color: ${({ theme }) => theme.colors.typography_subtitle};
  font-size: ${RFValue(16)}px;
`;


export const DockInputImage = styled.Image`
  margin-left: 20px;
`;