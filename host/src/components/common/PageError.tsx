import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, Heading, Link } from '@resideo/blueprint-react';
import Page from 'components/common/Page';

const PageError: FC = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Page as='main' data-test-page-not-found>
      <Card borderRadius={[0, 'medium']} padding='large'>
        <Heading as='h1' fontSize='xLarge' marginBottom='medium'>
          {t('404.subtitle')}
        </Heading>
        <p>{t('404.description')}</p>
        <Link href='/'>{t('404.link')}</Link>
      </Card>
    </Page>
  );
};

export default PageError;
