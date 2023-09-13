describe('test the examples', () => {
  beforeEach(() => {
    cy.visit('/examples');
  });
  it('test subscribe form correctly', () => {
    cy.get('[data-test="nav-example"]').click();
    cy.location('pathname').should('equal', '/examples');
  });
  it('intercepts', () => {
    cy.intercept('POST', 'http://localhost:3000/examples', {
      fixture: 'example.json',
    });
    cy.get(`[data-test="post-btn"]`).click();
  });
});
