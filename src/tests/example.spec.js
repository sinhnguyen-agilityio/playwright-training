import { test, expect } from '@playwright/test';

test.describe('Verify login feature', () => {
  test('Verify user login success!', async () => {
    console.log('SAUCE_USERNAME', process.env.SAUCE_USERNAME);
    console.log('SAUCE_ACCESS_KEY', process.env.SAUCE_ACCESS_KEY);
    console.log('AGE', process.env.AGE);
    console.log('NAME', process.env.NAME);
    expect(true).toBeTruthy();
    expect(process.env.SAUCE_USERNAME).toEqual('SAUCE_USERNAME_VALUE');
    expect(process.env.SAUCE_ACCESS_KEY).toEqual('SAUCE_ACCESS_KEY_VALUE');
    expect(process.env.AGE).toEqual('age1');
    expect(process.env.NAME).toEqual('value1');
  })
});
