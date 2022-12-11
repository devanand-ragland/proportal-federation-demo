/* eslint-disable no-useless-escape */

const phoneRegex = {
  US: /^[+]?[1]?[-. ]?\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/,
  CA: /^[+]?[1]?[-. ]?\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/,
};
const postalCodeRegex = {
  US: /^(\d{5})(?:[-\s](\d{4}))?$/,
  CA: /^(?!.*[DFIOQU])[A-VXY]\d[A-Z] \d[A-Z]\d$/,
};

export function checkPhoneNumber(value: string, countryCode = 'US', phoneRegexRules = phoneRegex): boolean {
  return phoneRegexRules[countryCode].test(value);
}

export function checkPostalCode(
  postalCode: string,
  countryCode = 'US',
  postalCodeRegexRules = postalCodeRegex
): boolean {
  return postalCodeRegexRules[countryCode].test(postalCode);
}

export function checkEmail(value: string): boolean {
  return /\S+@\S+\.\S+[\.\S+]?/.test(value);
}

export function checkPassword(value: string): boolean {
  // ^	The password string will start this way
  // (?=.*[a-z])	The string must contain at least 1 lowercase alphabetical character
  // (?=.*[A-Z])	The string must contain at least 1 uppercase alphabetical character
  // (?=.*[0-9])	The string must contain at least 1 numeric character
  // (?=.[!@#\$%\^&])	The string must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict
  // (?=.{8,})	The string must be eight characters or longer

  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(value);
}

export function checkUrl(value: string): boolean {
  return value.includes('http://') || value.includes('https://');
}

export function shallowEqual(object1, object2): boolean {
  if (!object1 || !object2) return false;
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
}
