import React from 'react';
import { Flex, Box } from '@resideo/blueprint-react';
import { useTranslation } from 'react-i18next';

export default function RolesList({ roles }) {
  const { t } = useTranslation();
  return (
    <Flex flexDirection='row-reverse' justifyContent='flex-end'>
      {roles.map((role, index) => (
        <Box key={role + index} display='inline' marginRight='small'>
          {t(`common.roles.${role}`)}
        </Box>
      ))}
    </Flex>
  );
}
