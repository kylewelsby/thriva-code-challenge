/// <reference types="cypress" />

context('Onboarding - Diet', () => {
  beforeEach(() => {
    cy.visit('/name')
    cy.get('input[name=name]').type('John')
    cy.get('button.primary').click()
    cy.get('.check-button:eq(0)').click().should('have.class', 'check-button--selected')
    cy.get('button.primary').click()
    cy.get('h1').should(
      'contain.text',
      'Do you follow a particular diet?'
    )
  })

  it('asks for diet', () => {
    cy.get('.check-button:eq(5)').should('contain.text', 'Plant-based').click()
    cy.get('button.primary').click()
    cy.location('pathname').should('eq', '/dob')
  })

  it("can't submit without selection", () => {
    cy.get('button.primary').should('have.attr', 'disabled')
  })

  it('Remembers name when returning from next page', () => {
    cy.get('.check-button:eq(1)').click()
    cy.get('button.primary').click()
    cy.location('pathname').should('eq', '/dob')
    cy.get('.back-button').click()
    cy.get('.check-button:eq(1)').should('have.class', 'check-button--selected')
  })
})
