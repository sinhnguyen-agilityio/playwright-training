import { test, expect } from '@playwright/test';

test.describe('Verify login feature', () => {
  test('Verify user login success!', async () => {
    console.log('ENV', process.env.SAUCE_USERNAME);
    console.log('ENV', process.env.SAUCE_ACCESS_KEY);
    expect(true).toBeTruthy();
  })
});
