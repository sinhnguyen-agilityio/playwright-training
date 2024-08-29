export const config = {
  HOST: process.env.URL || 'http://localhost',
  VALID_PHONE: process.env.VALID_PHONE || '2342340002',
  INVALID_PHONE: process.env.INVALID_PHONE || '8989009898',
  VALID_OTP: process.env.VALID_OTP || '123456',
  API_ROUTE: process.env.API_ROUTE || 'http://localhost/api/v1'
};
