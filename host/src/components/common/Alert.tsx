import React from 'react';
import styled from 'styled-components';
import { Box, Flex, Text } from '@resideo/blueprint-react';

//ignore typescript error in next lint
// @ts-ignore
import { ReactComponent as SuccessIcon } from '../components/icons/SuccessIcon.svg';
// @ts-ignore
import { ReactComponent as ErrorIcon } from '../components/icons/alert.svg';
// @ts-ignore
import { ReactComponent as InfoIcon } from 'components/icons/info.svg';
// @ts-ignore
import { ReactComponent as BellIcon } from 'components/icons/bell.svg';

const StatusBox = styled(Box)`
  flex-shrink: 0;
  padding: ${({ theme }) => theme.space.small};

  svg {
    fill: #fff;
    height: 3rem;
    vertical-align: middle;
    width: 3rem;
  }
`;

const Alert = ({ children, variant, ...rest }) => {
  return (
    <Flex {...rest}>
      {variant === 'success' && (
        <StatusBox backgroundColor='success'>
          <SuccessIcon />
        </StatusBox>
      )}
      {variant === 'error' && (
        <StatusBox backgroundColor='danger'>
          <ErrorIcon />
        </StatusBox>
      )}
      {variant === 'perks' && <BellIcon />}
      {variant !== 'success' && variant !== 'error' && variant !== 'perks' && (
        <StatusBox backgroundColor='info'>
          <InfoIcon />
        </StatusBox>
      )}
      <Flex
        flexDirection='column'
        justifyContent='center'
        paddingLeft='medium'
        paddingRight={variant !== 'perks' ? 'xLarge' : 'large'}
        paddingY='medium'>
        {children}
      </Flex>
    </Flex>
  );
};

export const ErrorAlert = (t, msg?: string) => (
  <Alert variant='error'>
    <Text>{msg ? t(msg) : t('common.toast.error')}</Text>
  </Alert>
);

export const SuccessAlert = (t, msg?: string) => (
  <Alert variant='success'>
    <Text>{msg ? t(msg) : t('common.toast.success')}</Text>
  </Alert>
);

export default Alert;
