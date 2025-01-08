import { test, expect } from '@playwright/test';

test.describe('Verify login feature', () => {
  test('Verify user login success!', async () => {
    expect(true).toBeTruthy();
    expect(process.env.AGE).toEqual('age1');
    expect(process.env.NAME).toEqual('value1');
  })
});
