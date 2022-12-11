import PhoneNumber from 'awesome-phonenumber';

/**
 * Format currency based on user's locale, with overriding option
 * @///<reference path="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat"/>
 * @param value
 * @param option
 */
export const formatCurrency = (value: number | string, options?: Intl.NumberFormatOptions, locale = 'en-US') => {
  const defaultOptions = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };
  const overrideOption = { ...defaultOptions, ...options };
  value = typeof value === 'string' ? parseFloat(value) : value;
  return new Intl.NumberFormat(locale, overrideOption).format(value);
};

/**
 * Format date/time based on user's locale, with overriding option
 * @///<reference path="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat"/>
 * Be careful with option like 'dateStyle' or 'timeStyle' since they are only experimental phase
 * @param value
 * @param options
 * @param locale
 */
export const formatDateTime = (value: number | string, options, locale = 'en-US') => {
  const defaultOption = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  };
  const overrideOption = { ...defaultOption, ...options };
  const date = new Date(value);
  return new Intl.DateTimeFormat(locale, overrideOption).format(date);
};

/**
 * Format phone number based on Country Code or Regional Code
 * @param phone
 * @param countryCode
 */
export const formatPhone = (phone = '', countryCode = 'US') => {
  if (!phone) return '';
  phone = phone.replace(/[^0-9]/g, '');
  return new PhoneNumber(phone, countryCode).getNumber('national');
};
