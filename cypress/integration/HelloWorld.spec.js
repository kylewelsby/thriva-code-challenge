/// <reference types="cypress" />

context("Hello World", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("works", () => {
    cy.get("body").should("contain.text", "Hello Vue 3.0 + Vite");
  });
});
