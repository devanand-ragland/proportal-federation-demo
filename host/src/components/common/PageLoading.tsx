import React, { FC } from 'react';
import styled from 'styled-components';
import { Spinner } from '@resideo/blueprint-react';

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: ${({ theme }) => theme.space.small};
`;

const PageLoading: FC = () => {
  return (
    <LoadingContainer>
      <Spinner color='primary' size='xxLarge' />
    </LoadingContainer>
  );
};

export default PageLoading;
