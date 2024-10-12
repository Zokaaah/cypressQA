describe("Hooks", () => {
  before(() => {
    cy.visit("localhost:3000/signup");
  });

  beforeEach(() => {
    cy.reload();
  });
  it("Basics", () => {
    // cy.title()
    //   .should("be.equal", "Cypress Real World App", "Validado")
    //   .and("contain", "App", "Validado");
  });

  it.only("TextFields", () => {
    cy.get("#firstName").type("Gabriel");
    cy.get("#firstName").should("have.value", "Gabriel");

    cy.get("#lastName").type("zokah").and("have.to", "zokah");

    cy.get("#username")
      .type("erro{selectall}{backspace}acerto")
      .and("have.to", "acerto");
  });
});
