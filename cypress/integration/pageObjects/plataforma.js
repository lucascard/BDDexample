class forpdi{
    planoAuto(){
        return cy.get('[class="fpdi-app-sidebar fpdi-tabs-stacked"]').children('[class="fpdi-tabs-nav"]').find('[class="fpdi-nav-label"][title="PlanoAuto"]').click()
    }
    nome(){
        return cy.get(':nth-child(1) > .budget-field-table')
    }
    email(){
        return cy.get(':nth-child(2) > .budget-field-table')
    }
    senha(){
        return cy.get(':nth-child(3) > .budget-field-table')
    }
    tipoDeConta(){
        return cy.get('.form-control')
    }
    botaoCadastrar(){
        return cy.get(':nth-child(5) > .btn > .fpdi-nav-label')
    }
    mostrarAte(){
        return cy.get('#users-table')
    }
    botaoRemover(){
        return cy.get('.col-sm-3.break-text > .dropdown > .dropdown-menu > :nth-child(3) > a > .fpdi-nav-label')
    }
    botaoSim(){
        return cy.get('#cancelModalCustom')
    }
    bloquearOuDesbloquear(){
        return cy.get('.col-sm-3.break-text > .dropdown > .dropdown-menu > :nth-child(2) > a > .fpdi-nav-label')
    }
    botaoSimDesbloquear(){
        return cy.get('.btn-success')
    }
    botaoVisualizar(){
        return cy.get('.col-sm-3.break-text > .dropdown > .dropdown-menu > :nth-child(1) > a > .fpdi-nav-label')
    }
    botaoElementosOrcamentarios(){
        return cy.get('[class="fpdi-app-sidebar fpdi-tabs-stacked"]').find('[class="fpdi-nav-icon mdi mdi-coin icon-link"]').click()
    }
}
export default forpdi