import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { SelectFieldProps } from '@resideo/blueprint-react';
import { SelectField } from '@resideo/blueprint-formik';

const STATES = [
  { value: 'AL', text: 'Alabama' },
  { value: 'AK', text: 'Alaska' },
  { value: 'AS', text: 'American Samoa' },
  { value: 'AZ', text: 'Arizona' },
  { value: 'AR', text: 'Arkansas' },
  { value: 'CA', text: 'California' },
  { value: 'CO', text: 'Colorado' },
  { value: 'CT', text: 'Connecticut' },
  { value: 'DE', text: 'Delaware' },
  { value: 'DC', text: 'District Of Columbia' },
  { value: 'FM', text: 'Federated States Of Micronesia' },
  { value: 'FL', text: 'Florida' },
  { value: 'GA', text: 'Georgia' },
  { value: 'HI', text: 'Hawaii' },
  { value: 'ID', text: 'Idaho' },
  { value: 'IL', text: 'Illinois' },
  { value: 'IN', text: 'Indiana' },
  { value: 'IA', text: 'Iowa' },
  { value: 'GU', text: 'Guam' },
  { value: 'KS', text: 'Kansas' },
  { value: 'KY', text: 'Kentucky' },
  { value: 'LA', text: 'Louisiana' },
  { value: 'ME', text: 'Maine' },
  { value: 'MH', text: 'Marshall Islands' },
  { value: 'MD', text: 'Maryland' },
  { value: 'MA', text: 'Massachusetts' },
  { value: 'MI', text: 'Michigan' },
  { value: 'MN', text: 'Minnesota' },
  { value: 'MS', text: 'Mississippi' },
  { value: 'MO', text: 'Missouri' },
  { value: 'MT', text: 'Montana' },
  { value: 'NE', text: 'Nebraska' },
  { value: 'NV', text: 'Nevada' },
  { value: 'NH', text: 'New Hampshire' },
  { value: 'NJ', text: 'New Jersey' },
  { value: 'NM', text: 'New Mexico' },
  { value: 'NY', text: 'New York' },
  { value: 'NC', text: 'North Carolina' },
  { value: 'ND', text: 'North Dakota' },
  { value: 'MP', text: 'Northern Mariana Islands' },
  { value: 'OH', text: 'Ohio' },
  { value: 'OK', text: 'Oklahoma' },
  { value: 'OR', text: 'Oregon' },
  { value: 'PA', text: 'Pennsylvania' },
  { value: 'PR', text: 'Puerto Rico' },
  { value: 'RI', text: 'Rhode Island' },
  { value: 'SC', text: 'South Carolina' },
  { value: 'SD', text: 'South Dakota' },
  { value: 'TN', text: 'Tennessee' },
  { value: 'TX', text: 'Texas' },
  { value: 'UM', text: 'United States Minor Outlying Islands' },
  { value: 'UT', text: 'Utah' },
  { value: 'VT', text: 'Vermont' },
  { value: 'VI', text: 'Virgin Islands' },
  { value: 'VA', text: 'Virginia' },
  { value: 'WA', text: 'Washington' },
  { value: 'WV', text: 'West Virginia' },
  { value: 'WI', text: 'Wisconsin' },
  { value: 'WY', text: 'Wyoming' },
];
const PROVINCES = [
  { value: 'AB', text: 'Alberta' },
  { value: 'BC', text: 'British Columbia' },
  { value: 'MB', text: 'Manitoba' },
  { value: 'NB', text: 'New Brunswick' },
  { value: 'NL', text: 'Newfoundland and Labrador' },
  { value: 'NT', text: 'Northwest Territories' },
  { value: 'NS', text: 'Nova Scotia' },
  { value: 'NU', text: 'Nunavut' },
  { value: 'ON', text: 'Ontario' },
  { value: 'PE', text: 'Prince Edward Island' },
  { value: 'QC', text: 'Quebec' },
  { value: 'SK', text: 'Saskatchewan' },
  { value: 'YT', text: 'Yukon' },
];

const countryStates = {
  US: STATES,
  CA: PROVINCES,
  '': STATES,
};
interface StateSelectProps extends SelectFieldProps {
  country?: string;
}

const StateSelect: FC<StateSelectProps> = props => {
  const { t } = useTranslation();
  const { country = 'US' } = props;
  const states = countryStates[country];
  return (
    <SelectField {...props}>
      <option value=''>{t('common.forms.choose')}</option>
      {states?.map(state => (
        <option key={state.value} value={state.value}>
          {state.text}
        </option>
      ))}
    </SelectField>
  );
};

export default StateSelect;