describe('Teste de preenchimento',()=>{

    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
      });
    
      beforeEach(() => {
        cy.reload();
      });

    it('Nome/Sobrenome',()=>{

        const nome = 'Gabriel'
        const Sobrenome = 'Silva'

        cy.get('#formNome').type(nome).should('have.value',(nome), 'sucesso')
        cy.get('[data-cy="dataSobrenome"]').type(Sobrenome)

        cy.get('#formSexoMasc').click()

        cy.get('#formComidaCarne').click().should("be.checked")
        cy.get('[data-test="dataEscolaridade"]').select('superior').should('have.value', 'superior')


    })

    it.only('select multiplo', ()=>{
        cy.get('[data-testid="dataEsportes"]').select(['futebol','Karate'])

    })

})

