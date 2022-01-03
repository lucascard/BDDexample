import { assert, expect } from "chai";

Given(/^Que eu clique em editar$/, () => {
	cy.get('.panel-heading > .mdi').click();
});

When(/^Eu editar o nome "([^"]*)"$/, (args1) => {
	cy.get('#field-name').clear().type(args1).invoke('attr', 'maxlength').should('eq', '255');
	/* cy.get('#field-name') */
});

When(/^Eu editar o email "([^"]*)"$/, (args1) => {
	cy.get('#field-email').clear().type(args1);

});

When(/^Eu editar o cpf "([^"]*)"$/, (args1) => {
	cy.get('#field-cpf').type(args1);

});

When(/^Eu editar o telefone "([^"]*)"$/, (args1) => {
	cy.get('#field-phone').clear().type(args1);

});

When(/^Eu editar a celular "([^"]*)"$/, (args1) => {
	cy.get('#field-cellphone').clear().type(args1);

});

When(/^Eu editar o Departamento "([^"]*)"$/, (args1) => {
	cy.get('#field-department').clear().type(args1);

});

When(/^Clicar em alterar Senha$/, () => {
	cy.get('.senhaUser > .fpdi-nav-label').click();
});

When(/^Digitar a senha atual "([^"]*)"$/, (args1) => {
	cy.get('#field-currentPassword').type(args1);
});

When(/^Digitar a nova senha "([^"]*)" e confirmar a nova senha "([^"]*)"$/, (args1, args2) => {
	cy.get('#field-newPassword').type(args1);
	cy.get('#field-newPasswordTwo').type(args2);
});

When(/^Clicar em salvar$/, () => {
	cy.get('.btn-success').click();


	cy.get("body", { log: false }).then($body => {
		if ($body.find('.modal-footer > .btn-success').length > 0) {
			cy.get('.modal-footer > .btn-success').click()

		}
	})

});

Then(/^Eu devo ver a mensagem "([^"]*)" e o popUp "([^"]*)"$/, (args1, args2) => {

	//const msgDeErroSenha = "A senha deve possuir no mínimo 8 dígitos e 3 dos 4 requisitos: Letra Maiúscula, minúscula, número e caractere especial";
	cy.contains(args2).should('be.visible')
	cy.contains(args1).scrollIntoView().should('be.visible');

});

/*
			
			
			
			
			

			
			
*/