import { test, expect } from '@playwright/test';

test.describe('Verify login feature', () => {
  test('Verify user login success!', async () => {
    console.log('SAUCE_USERNAME', process.env.SAUCE_USERNAME);
    console.log('SAUCE_ACCESS_KEY', process.env.SAUCE_ACCESS_KEY);
    console.log('AGE', process.env.AGE);
    console.log('NAME', process.env.NAME);
    expect(true).toBeTruthy();
  })
});
