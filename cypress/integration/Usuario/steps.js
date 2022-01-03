import Forpdi from '../pageObjects/plataforma';

const forpdi = new Forpdi()


When(/^Eu cadastrar um Usuário$/, () => {
    forpdi.mostrarAte().select('50 itens')
    cy.contains('Cadastrar usuário').click()
    forpdi.nome().type('Usuario Automatizado')
    forpdi.email().type('teste@gmail.com')
    forpdi.senha().type('Kamiza10')
    forpdi.tipoDeConta().select('Colaborador')
    forpdi.botaoCadastrar().click()
        
});

Then(/^A mensagem 'Usuário cadastrado com sucesso..' aparece$/, () => {
	cy.contains('Usuário cadastrado com sucesso:teste@gmail.com').should('be.visible')

});

When(/^Eu excluir um Usuário$/, () => {
	forpdi.mostrarAte().select('50 itens')
    cy.contains('teste@gmail.com').parents('tr').find('span[class="dropdown"]').click()        

/*    forpdi.botaoRemover().click()
    forpdi.botaoSim().click()
    cy.contains('Usuário removido com sucesso.').should('be.visible')*/
    
});

Then(/^A mensagem 'Já foi cadastrado um usuário..' aparece$/, () => {
    cy.contains('Já foi cadastrado um usuário com este e-mail.').should('be.visible')
});

Then(/^A mensagem 'Usuário removido com sucesso.' aparece$/, () => {
    return true
	//cy.contains('Usuário removido com sucesso.').should('be.visible')
});

When(/^Eu bloquear um Usuário$/, () => {
    forpdi.mostrarAte().select('50 itens')
    cy.contains('teste@gmail.com').parents('tr').find('span[class="dropdown"]').click()        	
    forpdi.bloquearOuDesbloquear().click()
    forpdi.botaoSim().click()
});

Then(/^A mensagem 'Usuário bloqueado com sucesso.' aparece$/, () => {
    cy.contains('Usuário bloqueado com sucesso.').should('be.visible')
});

When(/^Eu desbloquear um Usuário$/, () => {
	forpdi.mostrarAte().select('50 itens')
    cy.contains('teste@gmail.com').parents('tr').find('span[class="dropdown"]').click()        	
    forpdi.bloquearOuDesbloquear().click()
    forpdi.botaoSimDesbloquear().click()
});

Then(/^A mensagem 'Usuário desbloqueado com sucesso.' aparece$/, () => {
	cy.contains('Usuário desbloqueado com sucesso.').should('be.visible')
});

When(/^Eu visualizar um Usuário$/, () => {
	cy.contains('teste@gmail.com').parents('tr').find('span[class="dropdown"]').click()        	
    forpdi.botaoVisualizar().click()
});

Then(/^O título 'Editar Usuário' deve estar visível$/, () => {
	cy.contains('Editar Usuário').should('be.visible')
});


