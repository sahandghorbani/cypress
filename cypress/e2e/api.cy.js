/// <reference types= "cypress" />

describe("Example API Test", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/posts", {
      fixture: "posts.json",
    }).as("getPosts");

    cy.intercept("POST", "http://localhost:3001/posts", {
      statusCode: 201,
      body: {
        id: 101,
        title: "New Post",
        body: "This is the body of the new post.",
        userId: 1,
      },
    }).as("createPost");
  });

  it("should fetch and display posts", () => {
    cy.visit("/api");
  });
  it("should create a new post when the button is clicked", () => {
    cy.visit("/api");
    cy.get("[data-cy=create-post-input]").type("New Post");
    cy.get("[data-cy=create-post-btn]").click();

    cy.wait("@createPost").then((interception) => {
      expect(interception.response.statusCode).to.equal(201);
      expect(interception.response.body).to.deep.equal({
        id: 101,
        title: "New Post",
        body: "This is the body of the new post.",
        userId: 1,
      });
    });
    cy.contains("New Post");
  });
});
