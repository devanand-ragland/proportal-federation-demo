import React from 'react';
import { Box, BoxProps } from '@resideo/blueprint-react';

interface PageProps extends BoxProps {
  maxWidth?: string; // defaults to 48rem, the "medium" blueprint-react breakpoint
}

const Page = ({ children, maxWidth = '48rem', ...rest }: PageProps) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default Page;
