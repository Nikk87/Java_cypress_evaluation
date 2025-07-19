import DashboardPage from "../Pages/dashbordPage";

import LoginPage from "../Pages/loginPage";
const dashboardPage=new DashboardPage();
const loginOage= new LoginPage();

describe('Dashboard Ui and Hidden Elements', () => {
    before(() => {
        LoginPage.visit();
        loginPage.enterUsername("Admin");
        loginPage.enterPassword("admin123");
        loginPage.clickLogin();
    });
    it('should show hidden dropDown and asser its visibility', () => {
        dashboardPage.openHiddenMenu();
        cy.contains('Logout').should("be.visible")
    });
});