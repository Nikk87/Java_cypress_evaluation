class DashboardPage{
    openHiddenMenu(){
       cy.get('.oxd-main-menu-item active').click({force:true});
    }
    clickLogout(){
        cy.contains('Logout').click();
    }
    getCourseIframe(){
        return cy.get('#courseFrame');
    }
    clickiframePlay(){
        cy.iframe('#courseFrame').find('button.play').click();
    }
}
export default DashboardPage;