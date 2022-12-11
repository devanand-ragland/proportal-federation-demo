import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
//typescript ignore next lint
// @ts-ignore
import { ReactComponent as ResideoProLogo } from './resideo-pro-logo.svg';
// @ts-ignore
import { ReactComponent as ResideoKnockoutLogo } from './resideo-knockout-logo.svg';

const StyledResideoKnockoutLogo = styled(ResideoKnockoutLogo)`
  fill: #ffffff;
  margin-right: ${({ theme }) => theme.space.medium};
`;

const LogoContainer = styled(Link)`
  align-items: center;
  display: flex;
`;

const StyledResideoProLogo = styled(ResideoProLogo)`
  fill: #ffffff;
`;

export const HeaderLogo: FC = props => {
  const { t } = useTranslation();
  return (
    <LogoContainer aria-label={t('header.primary.home')} to='/' {...props}>
      <StyledResideoKnockoutLogo />
      <StyledResideoProLogo />
    </LogoContainer>
  );
};
