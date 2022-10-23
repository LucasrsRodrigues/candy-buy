import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";


interface activeProp {
  active: boolean;
}

export const MembershipOptionContainer = styled.TouchableOpacity<activeProp>`
  width: 100%;

  padding: 14px 16px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${RFValue(20)}px;

  border: 3px solid ${({ theme }) => theme.colors.grey_05};

  flex-direction: row;
  align-items: center;

  ${props => props.active && css`
    border: 6px solid ${({ theme }) => theme.colors.yellow_60};
  `};
`;

export const MembershipOptionImage = styled.View`
  width: 64px;
  height: 64px;
  background: ${({ theme }) => theme.colors.yellow_40};
  border-radius: 16px;

  align-items: center;
  justify-content: center;
`;


export const MembershipOptionValue = styled.Text<activeProp>`
  font-size: ${RFValue(28)}px;
  font-family: ${({ theme }) => theme.fonts.fredokaOne};
  color: ${({ theme }) => theme.colors.typography_caption};

  margin-left: auto;

  ${props => props.active && css`
    color: ${({ theme }) => theme.colors.yellow_80};
  `};
`;

export const MembershipOptionTexts = styled.View`
  margin-left: ${RFValue(8)}px;
`;

export const MembershipOptionTitle = styled.Text<activeProp>`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.body_bold};
  color: ${({ theme }) => theme.colors.typography_subtitle};

  ${props => props.active && css`
    color: ${({ theme }) => theme.colors.yellow_80};
  `};
`;

export const MembershipOptionTime = styled.Text<activeProp>`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.body_bold};
  color: ${({ theme }) => theme.colors.typography_paragraph};

  ${props => props.active && css`
    color: ${({ theme }) => theme.colors.yellow_80};
  `};
`;
