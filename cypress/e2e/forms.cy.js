describe('test the form page', () => {
  beforeEach(() => {
    cy.visit('/forms');
    cy.contains(/testing forms/i);
  });
  it('test subscribe form correctly', () => {
    cy.get('input[name="Email"]').as('email-input').type('sahand575@gmail.com');
    cy.get('input[name="password"]').as('password-input').type('123456');
    cy.get('button[data-test="subscribe-button"]').click();
    cy.get('p[data-test="sub-message"]').contains(/Successfully subbed/i);
    cy.wait(2000);
    cy.get('p[data-test="sub-message"]').should('not.exist', /Successfully subbed/i);
  });
  it('test subscribe form incorrectly', () => {
    cy.get('input[name="Email"]').type('sahand575@gmail');
    cy.get('input[name="password"]').type('123456');
    cy.get('button[data-test="subscribe-button"]').click();
    cy.get('p[data-test="sub-message"]').contains(/Invalid email/i);
    cy.wait(2000);
    cy.get('p[data-test="sub-message"]').should('not.exist', /Invalid email/i);
  });
});
