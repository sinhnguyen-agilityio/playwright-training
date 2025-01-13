import { test, expect } from '@playwright/test';

test.describe('Verify login feature', () => {
  test('Verify user login success!', async () => {
    console.log('AGE', process.env.AGE);
    console.log('NAME_VALUE', process.env.NAME_VALUE);
    expect(true).toBeTruthy();
    expect(process.env.AGE).toEqual('age1');
    expect(process.env.NAME_VALUE).toEqual('[9x[,+=]rF');
  })
});
