import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Flex, Box } from '@resideo/blueprint-react';
import { InputField } from '@resideo/blueprint-formik';
import StateSelect from './StateSelect';
import CountryCodeSelectField from './CountryCodeSelectField';
import { checkPostalCode } from 'utils/validation';

export const addressNames = {
  address1: 'address1',
  address2: 'address2',
  city: 'city',
  state: 'state',
  zip: 'zip',
  country: 'country',
};

export const billingAddressNames = {
  address1: 'address1Billing',
  address2: 'address2Billing',
  city: 'cityBilling',
  state: 'stateBilling',
  zip: 'zipBilling',
  country: 'countryBilling',
};

export interface AddressType {
  address1: string;
  address2?: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

interface AddressProps {
  country: string;
  names: AddressType;
  prefix?: string;
}

export const Address: FC<AddressProps> = ({ country, names }) => {
  const { t } = useTranslation();
  return (
    <>
      <Box data-test-address-country marginBottom='medium'>
        <CountryCodeSelectField label={t('common.address.country')} name={names.country} required />
      </Box>
      <Flex marginBottom='medium' flexDirection={['column', 'row']}>
        <Box data-test-address-address1 width={[1, 2 / 3]} marginBottom={['medium', 0]}>
          <InputField name={names.address1} label={t('common.address.address1')} required />
        </Box>
        <Box data-test-address-address2 width={[1, 1 / 3]} marginLeft={[0, 'medium']}>
          <InputField name={names.address2 || ''} label={t('common.address.address2')} />
        </Box>
      </Flex>

      <Flex marginBottom='medium' flexDirection={['column', 'row']}>
        <Box data-test-address-city width={[1, 1 / 2]} marginBottom={['medium', 0]}>
          <InputField name={names.city} label={t('common.address.city')} required />
        </Box>
        <Box data-test-address-state width={[1, 1 / 4]} marginLeft={[0, 'medium']} marginBottom={['medium', 0]}>
          <StateSelect name={names.state} label={t('common.address.state')} required country={country} />
        </Box>
        <Box data-test-address-zip width={[1, 1 / 3]} marginLeft={[0, 'medium']}>
          <InputField name={names.zip} label={t('common.address.zip')} required />
        </Box>
      </Flex>
    </>
  );
};

export const validateAddress = (errors, t, values: AddressType, prefix = '') => {
  if (!values[`address1${prefix}`]) {
    errors[`address1${prefix}`] = t('common.address.addressRequired');
  }
  if (!values[`city${prefix}`]) {
    errors[`city${prefix}`] = t('common.address.cityRequired');
  }
  if (!values[`state${prefix}`]) {
    errors[`state${prefix}`] =
      !values[`country${prefix}`] || values[`country${prefix}`] === 'US'
        ? t('common.address.stateRequired')
        : t('common.address.provinceRequired');
  }
  if (!values[`zip${prefix}`]) {
    errors[`zip${prefix}`] = t('common.address.zipRequired');
  } else {
    if (!checkPostalCode(values[`zip${prefix}`])) {
      errors[`zip${prefix}`] = t('common.address.zipInvalid');
    }
  }
  if (!values[`country${prefix}`]) {
    errors[`country${prefix}`] = t('common.address.countryRequired');
  }

  return errors;
};

export const validateBillingAddress = (errors, t, values) => validateAddress(errors, t, values, 'Billing');
