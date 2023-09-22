/// <reference types= "cypress" />
describe("Page Component", () => {
  const func = {
    calculateSumAndSetTitle: () => {
      return 11;
    },
  };
  beforeEach(() => {
    cy.visit("/spy");
  });

  it("Calculates and displays the sum correctly", () => {
    cy.get('[data-cy="calc-btn"]').click();
    cy.spy(func, "calculateSumAndSetTitle").returnValues();
  });
});
