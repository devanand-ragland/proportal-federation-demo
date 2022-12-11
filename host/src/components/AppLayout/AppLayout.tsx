import React, { FC } from 'react';
import { Box, Flex } from '@resideo/blueprint-react';
import AuthenticatedHeader from 'components/header/AuthenticatedHeader';
import AnonymousHeader from 'components/header/AnonymousHeader';
import { Footer } from 'components/Footer';


const AppLayout: FC = ({ children }): JSX.Element => {

  return (
    <Flex flexDirection='column' minHeight='100vh'>
      {<AuthenticatedHeader />}
      <Flex flex='1'>
        <Box as='main' flex='1'>
          {children}
        </Box>
      </Flex>
      <Footer />
    </Flex>
  );
};
export default AppLayout;
