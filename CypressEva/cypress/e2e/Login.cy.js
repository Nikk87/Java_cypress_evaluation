import LoginPage from "../Pages/loginPage";

const loginPage= new LoginPage();

describe('Login Test', () => {
    before(() => {
        loginPage.visit();
    });

    it('should login with valid assert dashbord', () => {
        loginPage.enterUsername("Admin");
        loginPage.enterPassword("admin123");
        loginPage.clickLogin();
        cy.url().should('include','/dashboard');

      cy.window().then((win)=>{
        expect(win.localStorage.getltem('orangehrm')).to.exist;
      })
    });
});