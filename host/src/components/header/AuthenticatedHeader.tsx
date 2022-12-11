import React, { FC, Suspense } from 'react';
import styled from 'styled-components';

import { Spinner } from '@resideo/blueprint-react';
import primaryNavigation from 'config/navigation';
import Header from './Header';
import HeaderNavLink from './HeaderNavLink';
import { AvatarMenu } from './AvatarMenu';

const PrimaryNavLinksContainer = styled.div`
  display: none;
  margin-right: auto;
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    display: block;
  }
`;

const StyledProfileMenu = styled(AvatarMenu)`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    display: block;
  }
`;

const AuthenticatedHeader: FC = () => {
  return (
    <Header
      primaryNav={
        <>
          <PrimaryNavLinksContainer data-test-primary-web-nav>
            {primaryNavigation.map(data => (
              <HeaderNavLink
                key={data.name}
                linkPath={data.linkPath}
                name={data.name}
                linkTextKey={data.linkTextKey}
                isExternalLink={data.isExternalLink}
              />
            ))}
          </PrimaryNavLinksContainer>
          <Suspense fallback={<Spinner />}>
            <StyledProfileMenu />
          </Suspense>
        </>
      }
    />
  );
};

export default AuthenticatedHeader;
