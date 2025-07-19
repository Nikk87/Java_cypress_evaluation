import DashboardPage from "../Pages/dashbordPage";

import LoginPage from "../Pages/loginPage";
const dashboardPage=new DashboardPage();
const loginOage= new LoginPage();

describe('Dashboard Ui and Hidden Elements', () => {
    before(() => {
        LoginPage.visit();
        LoginPage.enterUsername("Admin");
        LoginPage.enterPassword("admin123");
        LoginPage.clickLogin();
    });
    it('should show hidden dropDown and asser its visibility', () => {
        dashboardPage.openHiddenMenu();
        cy.contains('Logout').should("be.visible")
    });
});