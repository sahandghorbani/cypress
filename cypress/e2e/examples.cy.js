describe("test the examples", () => {
  beforeEach(() => {
    cy.visit("/examples");
  });
  it("test subscribe form correctly", () => {
    cy.get('[data-test="nav-example"]').click();
    cy.location("pathname").should("equal", "/examples");
  });
  it("intercepts", () => {
    cy.intercept("POST", "http://localhost:3000/examples", {
      fixture: "example.json",
    });
    cy.get(`[data-test="post-btn"]`).click();
  });

  //adding item
  it("add and deleting item", () => {
    cy.get("h3").should("have.text", "Add Some Grudges");

    cy.getByTestId("grudge-list").within(() => {
      cy.get("li").should("have.length", 0);
    });
    // when the list is empty we should not see clear-all btn
    cy.getByTestId("clear-btn").should("not.exist");

    //add 1
    cy.getByTestId("grudge-input").within(() => {
      cy.get("input").type("goodbye");
      cy.getByTestId("add-btn").click();
    });
    cy.get("h3").should("have.text", "Grudges");

    cy.getByTestId("grudge-list").within(() => {
      cy.get("li").should("have.length", 1);
    });
    //add 2
    cy.getByTestId("grudge-input").within(() => {
      cy.get("input").type("world");
      cy.getByTestId("add-btn").click();
    });
    cy.getByTestId("grudge-list").within(() => {
      cy.get("li").should("have.length", 2);
    });

    // delete1
    // first approach
    cy.getByTestId("grudge-list")
      .find('[data-test="delete-btn"]')
      .each(($button) => {
        cy.wrap($button).as("deleteButton");
      });
    cy.get("@deleteButton").click();

    cy.getByTestId("grudge-list").within(() => {
      cy.get("li").should("have.length", 1);
    });

    // second approach

    /* cy.getByTestId("grudge-list").within(() => {
      cy.get("li")
        .its(0)
        .within(() => {
          cy.get("button").click();
        });
    });
    cy.getByTestId("grudge-list").within(() => {
      cy.get("li").should("have.length", 1);
    });
    */

    cy.getByTestId("clear-btn").click();
    cy.get("h3").should("have.text", "Add Some Grudges");
  });

  // it("test", () => {
  //   cy.get("#container").within(() => {
  //     cy.get("input1").type("Hello");
  //   });
  // });
});
