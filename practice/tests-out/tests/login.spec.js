"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loginPage_1 = require("../pages/loginPage");
const test_1 = require("@playwright/test");
test_1.test.describe('Verify login feature', () => {
    (0, test_1.test)('Verify user login success!', async ({ page }) => {
        /**
         * Initialize the expected page.
         */
        const loginPage = new loginPage_1.LoginPage(page);
        await loginPage.navigate();
        await loginPage.login('2342340002');
    });
    // test('Verify user login fail!', async ({ page }) => {});
});
//# sourceMappingURL=login.spec.js.map