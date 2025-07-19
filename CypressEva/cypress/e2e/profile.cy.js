describe('Profile page Form', () => {
    before(() => {
        cy.visit('/profile');
    });

    it('fills the profile form with jQure-style access', () => {
        cy.get('#enableProfile').check();
        cy.get('#username').then((sel)=>{
            sel.val('Nikhil');
            sel.trigger('input');
        });
        cy.get('#username').should('have.value','Nikhil');
        cy.get('#username').should('not.be.disabled')
    });
});