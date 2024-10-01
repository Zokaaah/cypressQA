describe('Realizar cadastro de usuario', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/signup')

    cy.get('#firstName').type('SeuNome')
    cy.get('#lastName').type('SeuSobreNome')
    cy.get('#username').type('zokah')
    cy.get('#password').type('suasenha')
    cy.get('#confirmPassword').type('suasenha')
    cy.get('[data-test="signup-submit"]').click()

    cy.wait(5000)


    cy.get('#username').type('SeuUsuario')
    cy.get('#password').type('SuaSenha')

    cy.get('[data-test="signin-submit"]').click()


    cy.get('[data-test="user-onboarding-next"]').click()

    //create account
    cy.get('#bankaccount-bankName-input').type('SeuBanco')
cy.get('#bankaccount-routingNumber-input').type('123456789')
cy.get('#bankaccount-accountNumber-input').type(987654321)

cy.get('[data-test="bankaccount-submit"]').click()  

cy.get('[data-test="user-onboarding-next"]').click()

  })
})