describe('test the overview page', () => {
  beforeEach(() => {
    cy.visit('/fundamentals');
  });
  it('test existence of  the header of the page', () => {
    cy.getByTestId('fundamentals-header').should('contain.text', 'Testing Fundamentals'); //〽or contains(/testing Fundamentals/i)
  });
  it('accordion works correctly', () => {
    cy.get('[data-test="accordion-1"]').click();
    cy.get('[data-test="accordion-detail-1"]').should('be.visible');
    cy.get('[data-test="accordion-1"]').click();
    cy.get('[data-test="accordion-detail-1"]').should('not.be.visible');
  });
});
