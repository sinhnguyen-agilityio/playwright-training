export const config = {
  HOST: process.env.URL || 'http://localhost',
  VALID_PHONE: process.env.VALID_PHONE || '2342340002',
  NOT_FOUND_PHONE: process.env.NOT_FOUND_PHONE || '8989009898',
  INVALID_PHONE: process.env.INVALID_PHONE || '9999999999',
  VALID_OTP: process.env.VALID_OTP || '123456',
  API_ROUTE: process.env.API_ROUTE || 'http://localhost/api/v1',
  COGNITO: process.env.COGNITO || 'https://cognito-idp.us-east-1.amazonaws.com',
  CLIENT_ID: process.env.CLIENT_ID || ''
};
