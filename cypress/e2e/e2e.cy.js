describe("Model Cypress", () => {
  before(() => {
    cy.visit("https://wcaquino.me/cypress/componentes.html");
  });

  beforeEach(()=>{
      cy.reload()
  })

//   it('JustText',()=>{
//       cy.get('#formNome').type('Gabriel').and('have.to','gabriel',{delay:100})

//       cy.get('[data-cy="dataSobrenome"]').type('zokah').and('have.to','zokah')
//   })

  it ("Radiobutton", () => {
    cy.get("#formSexoFem")
    .click()
    .should("be.checked");

    cy.get('#formSexoMasc').should("not.be.checked")

    cy.get("[name='formSexo']").should('have.length', 2)
  });

  it.only('Checkbox', ()=>{
    cy.get('#formComidaPizza').click()
  })
});
