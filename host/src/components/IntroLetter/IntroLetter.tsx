import React, { FC } from 'react';
import { Heading, Text, Link } from '@resideo/blueprint-react';
import { IntroLetterContainer } from './IntroLetter.style';
// @ts-ignore
const App = React.lazy(() => import('remote/App'));

const IntroLetter: FC = () => (
  // <IntroLetterContainer>
  //   <Heading marginBottom='large'>Hello World!</Heading>

  //   <Text marginBottom='medium'>
  //     Welcome to (what will become) the Resideo Template App. We&rsquo;re just getting this set up around here, but are
  //     happy to you came to check it out. This app is based off the app Resideo Pro-Portal which also serves{' '}
  //     <Link href='https://pro.resideo.com'>pro.resideo.com</Link>.
  //   </Text>

  //   <Text marginBottom='medium'>
  //     If you&rsquo;d like to learn more about our team and roadmap, check out{' '}
  //     <Link href='https://resideoinc.sharepoint.com/sites/proportal'>our Sharepoint site</Link>.
  //   </Text>

  // </IntroLetterContainer>
  <App />
);

export default IntroLetter;
