/// <reference types="cypress" />

context('Hello World', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('works', () => {
    cy.get('h1.align-center').should(
      'contain.text',
      '👋 Welcome to the Thriva front-end coding challenge'
    )
  })
})
