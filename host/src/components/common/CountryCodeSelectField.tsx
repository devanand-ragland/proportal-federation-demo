import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { SelectFieldProps } from '@resideo/blueprint-react';
import { SelectField } from '@resideo/blueprint-formik';

const COUNTRIES = [
  { value: 'US', text: 'common.countries.US' },
  { value: 'CA', text: 'common.countries.CA' },
];

const CountryCodeSelectField: FC<SelectFieldProps> = props => {
  const { t } = useTranslation();
  return (
    <SelectField {...props}>
      <option value=''>{t('common.forms.choose')}</option>
      {COUNTRIES.map(country => (
        <option key={country.value} value={country.value}>
          {t(country.text)}
        </option>
      ))}
    </SelectField>
  );
};

export default CountryCodeSelectField;
