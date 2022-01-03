import Forpdi from '../pageObjects/plataforma'

const forpdi = new Forpdi()

When(/^Entre em Novo Plano$/, () => {
    cy.get('.fpdi-app-sidebar').contains("Novo plano").click()

});


Given(/^que eu preencha o "([^"]*)"$/, (args1) => {
	cy.get('#field-name').type(args1)
});

Then(/^preencha a "([^"]*)" e a "([^"]*)"$/, (args1,args2) => {
	cy.get('#field-begin').type(args1)
    cy.get('#field-end').type(args2, {force: true})
});

Then(/^preencha a "([^"]*)"$/, (args1) => {
	cy.get('#field-description').type(args1, {force: true})
});

When(/^Eu clicar no botão 'Salvar'$/, () => {
	cy.get('.text-left > .btn-success').click()

    
        cy.get("body", { log: false }).then($body => {
            if ($body.find('.modal-footer > .btn-success').length > 0) {
                cy.get('.modal-footer > .btn-success').click()
            }
        })
});

Then(/^A "([^"]*)" aparece$/, (args1) => {
	cy.contains(args1).should('be.visible')
});

When(/^eu excluir o plano criado$/, () => {
    cy.get('[title="Planos de metas"] > .fpdi-nav-label').click()
    cy.get('h1 > .dropdown > .dropdown-toggle > .mdi').click()
    cy.get('#level-menu > :nth-child(4) > a').click()
    forpdi.botaoSim().click()

});

Then(/^A "([^"]*)" e a "([^"]*)" aparecem$/, (args1,args2) => {
    cy.contains(args1).should('be.visible')
    cy.contains(args2).should('be.visible')
});

Given(/^que eu verifique se já existe um plano criado$/, () => {
    return true

});


/* Cenario: Excluir Plano
    Dado que eu verifique se já existe um plano criado
    Quando eu excluir o plano criado
    Entao A mensagem "PlanoAuto excluído com sucesso." irá aparecer  */