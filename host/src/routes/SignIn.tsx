import React, { FC, useState, useEffect, useMemo } from 'react';
import { Form, Formik, Field } from 'formik';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import { Box, Button, Card, Flex, Heading, Spinner, Text, InputField, PasswordField } from '@resideo/blueprint-react';

import { ENABLE_MOCKS } from 'config';
import PageLoading from 'components/common/PageLoading';

interface ErrorMessage {
  message: string;
  description: string;
}

const SignIn: FC = () => {

  const history = useHistory();

  const [signInError, setSignInError] = useState<ErrorMessage>();
  const { t } = useTranslation();



  const submitForm = async (values: { email: string; password: string }) => {
  };

  if (ENABLE_MOCKS) {
    return (
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={submitForm}>
        {({ initialValues, isSubmitting }) => (
          <Box
            as='main'
            marginX='auto'
            maxWidth='36rem'
            paddingX={[0, 'medium']}
            paddingY={['large', 'large', 'xLarge']}
            width={1}>
            <Heading as='h1' paddingTop='large' paddingBottom='medium' paddingX='medium' fontSize='xxxLarge'>
              Sign In
            </Heading>
            <Form role='form' data-test-sign-in-form noValidate>
              {signInError && (
                <Card marginBottom='medium'>
                  <Text>{signInError.message || signInError.description}</Text>
                </Card>
              )}
              <Card borderRadius={[0, 'medium']} paddingX={['medium', 'large']} paddingY='large'>
                <Box data-test-email-control marginBottom='medium'>
                  <Field
                    label='Email'
                    name='email'
                    component={InputField}
                    type='email'
                    placeholder='Email'
                    onChange={e => {
                      initialValues.email = e.target.value;
                    }}
                  />
                </Box>
                <Box data-test-password-control marginBottom='medium'>
                  <Field
                    label='Password'
                    name='password'
                    component={PasswordField}
                    type='password'
                    placeholder='Password'
                    onChange={e => {
                      initialValues.password = e.target.value;
                    }}
                  />
                </Box>
                <Flex flexDirection={['column', 'column', 'row-reverse']}>
                  <Button width={[1, 'auto']} variant='primary' type='submit'>
                    {isSubmitting && !signInError && (
                      <Spinner aria-label={t('signIn.inProgress')} marginX='small' verticalAlign='text-top' />
                    )}
                    {(!isSubmitting || signInError) && 'Sign In'}
                  </Button>
                </Flex>
              </Card>
            </Form>
          </Box>
        )}
      </Formik>
    );
  }

  return <PageLoading />;
};

export default SignIn;
