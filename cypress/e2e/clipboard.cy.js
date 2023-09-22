/// <reference types= "cypress" />

describe("My todo app", () => {
  beforeEach(() => {
    cy.visit("/clipboard").then((win) => {
      cy.stub(win.navigator.clipboard, "writeText").as("saveToClipboard");
      cy.spy(win.localStorage, "setItem").as("storeLocation");
      cy.spy(win.localStorage, "getItem").as("getStoredLocation");
    });
  });
  it("test the clipboard copy the text  ", () => {
    cy.get('[data-cy="copy-btn"]').click();
    cy.get("@saveToClipboard").should("to.be.calledWithMatch", /Hello, world!/i);
    cy.get("@storeLocation").should("to.be.called");
  });
});
