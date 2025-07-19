describe('Embedded iframe content', () => {
    it('intrects with iframe and check course title', () => {
        cy.visit('/dashboard');

        cy,get('#courseFrame').iframe().within(()=>{
            cy.contains('course Title').should('be.visible');
            cy,get('button.play').click();
            cy.get('button.play').should('have.class','playing')
        });
    });
});