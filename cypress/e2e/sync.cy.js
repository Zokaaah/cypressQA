describe('Esperas',()=>{
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
      });
    
      beforeEach(() => {
        cy.reload();
      });

      it('deve aguardar elemento estar disponivel', ()=>{
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('exist')
        .type('Funciona')
      })

      it('Uso do find', ()=>{

        cy.get('#buttonList').click()

        cy.get('#lista li').find('span').should('contain', 'Item 1')     

        cy.get('#lista li span').should('contain','Item 2')
     })

     it('Uso do timeout',()=>{

        // cy.get('#buttonDelay').click()
        // cy.get('#novoCampo',{timeout:9000}).should('exist')

        cy.get('#buttonListDOM').click()
        // cy.get('#lista li span',{timeout:6000}).should('contain', 'Item 2')     
        cy.get('#lista li span',{timeout:6000}).should('have.length', 2)     
     })

     it.only('button retry', ()=>{
        cy.get('#buttonCount').click().should('have.value', 11)
        .click()
        .should('have.value', 111)
     })
})