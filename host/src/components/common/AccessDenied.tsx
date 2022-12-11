import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, Heading, Text } from '@resideo/blueprint-react';

const AccessDenied: FC = () => {
  const { t } = useTranslation();
  return (
    <Card borderRadius={[0, 'medium']} padding='large' data-test-access-denied>
      <Heading as='h1' fontSize='large' marginBottom='medium'>
        {t('accessDenied.heading')}
      </Heading>
      <Text>{t('accessDenied.content')}</Text>
    </Card>
  );
};

export default AccessDenied;
