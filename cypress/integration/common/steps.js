import Forpdi from '../pageObjects/plataforma';
const forpdi = new Forpdi()

Given(/^Que eu esteja logado$/, () => {
    
	cy.visit('http://localhost:8081')
    cy.get('#field-email').type('admin@forpdi.org')
    cy.get('#field-password').type('Teste11!')
    cy.get('.btn').click()
    cy.get('.app-select > :nth-child(1) > img').should('be.visible')
    cy.get(':nth-child(2) > img').should('be.visible')
    cy.get(':nth-child(1) > .app-select--card-bt > span').click()
});

When(/^Entre em Meu Perfil$/, () => {
	cy.get('#align-top-bar-menu').click()
    cy.contains('Meu Perfil').click()
});


When(/^Entre em Usuários$/, () => {
    cy.get('#align-top-bar-menu').click()
    cy.contains('Usuários').click()
});


When(/^Entre em Elementos Orçamentários$/, () => {
    forpdi.botaoElementosOrcamentarios()
	
});
