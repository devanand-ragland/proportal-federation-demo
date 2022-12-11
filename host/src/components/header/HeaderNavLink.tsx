import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Link as BlueprintLink } from '@resideo/blueprint-react';

interface HeaderNavLinkProps {
  linkPath: string;
  name: string;
  linkTextKey: string;
  isExternalLink?: boolean;
}

const StyledHeaderNavLink = styled(({ isExternalLink, ...props }) =>
  isExternalLink ? <BlueprintLink {...props} /> : <NavLink {...props} />
)`
  display: inline-block;
  height: 100%;
  letter-spacing: 0.35px;
  line-height: 3.75rem;
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin: 0 ${({ theme }) => theme.space.small};
  text-decoration: none;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.header.primaryLink};
  transition: border-color 0.5s ease-out;
  svg {
    position: relative;
    top: 6px;
    fill: ${({ theme }) => theme.colors.header.primaryLink};
  }

  &:hover,
  &.active {
    color: ${({ theme }) => theme.colors.header.primaryLinkActive};
    svg {
      fill: ${({ theme }) => theme.colors.header.primaryLinkActive};
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xLarge}) {
    margin: 0 ${({ theme }) => theme.space.medium};
  }
`;

const HeaderNavLink = ({ linkPath, linkTextKey, isExternalLink = false }: HeaderNavLinkProps): JSX.Element => {
  const { t } = useTranslation();

  return isExternalLink ? (
    <StyledHeaderNavLink href={linkPath} isExternalLink={isExternalLink}>
      {t(linkTextKey)}
    </StyledHeaderNavLink>
  ) : (
    <StyledHeaderNavLink to={linkPath} isExternalLink={isExternalLink}>
      {t(linkTextKey)}
    </StyledHeaderNavLink>
  );
};

export default HeaderNavLink;
