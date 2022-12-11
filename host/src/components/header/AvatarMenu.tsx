import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Menu, MenuButton, MenuList, MenuLink } from '@reach/menu-button';
import '@reach/menu-button/styles.css';
import { Link as RRLink } from 'react-router-dom';
import { Avatar } from '@resideo/blueprint-react';


const AvatarMenuButton = styled(MenuButton)`
  appearance: none;
  box-sizing: border-box;
  cursor: pointer;
  padding: 0;
  border-radius: 50%;
  border: 1px solid #ccc;
  max-width: 2.25rem;
  max-height: 2.25rem;
  overflow: hidden;
  &:focus {
    outline: none;
    box-shadow: 0 0 0.1rem 0.1rem #ccc;
  }
`;

const AvatarMenuDropDownList = styled(MenuList)`
  position: absolute;
  right: -10px;
  text-align: left;
  z-index: 200;
  &:after {
    content: '';
    position: absolute;
    right: 20px;
    bottom: 100%;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid ${({ theme }) => theme.colors.header.primaryBackground};
    clear: both;
  }
`;

const StyledMenuLink = styled(RRLink)`
  color: ${({ theme }) => theme.colors.header.primaryLink};
`;

export const AvatarMenu: FC = rest => {
  const { t } = useTranslation();



  return (
    <Menu>
      <AvatarMenuButton {...rest}>
        {/* <Avatar
          aria-label={firstName && lastName ? `${firstName} ${lastName}` : t('header.primary.settings')}
          src={photoUrl ? `${photoUrl}` : undefined}
          width={1}
        /> */}
      </AvatarMenuButton>
      <AvatarMenuDropDownList>
        <MenuLink to='/profile' as={RRLink as any}>
          {t('header.profile')}
        </MenuLink>
        <MenuLink as={StyledMenuLink} to='/sign-out'>
          {t('header.signout')}
        </MenuLink>
      </AvatarMenuDropDownList>
    </Menu>
  );
};
