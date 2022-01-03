import Forpdi from '../pageObjects/plataforma';
const forpdi = new Forpdi()

Given(/^Que eu clique em Novo$/, () => {
    cy.get('[class="budget-btns"]').children('[class="btn btn-primary budget-new-btn"]').click()

});

When(/^Preencha a ação "([^"]*)"$/, (args1) => {
    cy.get(':nth-child(1) > .budget-field-table').type(args1)});


Then(/^Preencha o orçamento "([^"]*)"$/, (args1) => {
    cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .budget-field-table').type(args1)
});

When(/^Eu clicar no botão salvar$/, () => {
	cy.get('.mdi-check').click()
});

Given(/^Que eu tenha ações cadastradas "([^"]*)"$/, (args1) => {
	cy.contains(args1).should('be.visible')
	
});

When(/^Eu clicar no botão excluir da ação "([^"]*)"$/, (args1) => {
	cy.contains(args1).siblings('[class="edit-budget-col cn cursorDefault"]').find('[class="mdi mdi-delete cursorPointer inner"]').click()

});

Then(/^A mensagem "([^"]*)" e o popUp "([^"]*)" irão aparecer$/, (args1,args2) => {
	cy.contains(args1).should('be.visible')
	cy.contains(args2).should('be.visible')
});

Then(/^A mensagem popUp "([^"]*)" irá aparecer$/, (args1) => {
	cy.contains(args1).should('be.visible')
	
});

Then(/^A mensagem "([^"]*)" e o popUp "([^"]*)" devem aparecer$/, (args1,args2) => {
	cy.contains(args1).should('be.visible')
	cy.get('#cancelModalCustom').click()
	cy.contains(args2).should('be.visible')
});

When(/^Eu clicar no botão editar da ação "([^"]*)"$/, (args1) => {
	cy.contains(args1).siblings('[class="edit-budget-col cn cursorDefault"]').find('[class="mdi mdi-pencil cursorPointer marginRight10 inner"]').click()
});

When(/^Editar o nome da Ação "([^"]*)"$/, (args1) => {
	cy.get(':nth-child(1) > .budget-field-table').clear().type(args1)
	
});

When(/^Editar o orçamento "([^"]*)"$/, (args1) => {
	cy.contains('').clear().type(args1)
});

When(/^Clicar no botão salvar$/, () => {
	return true;
});
