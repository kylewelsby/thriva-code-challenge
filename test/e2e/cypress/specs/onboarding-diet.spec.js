/// <reference types="cypress" />

context('Onboarding - Diet', () => {
  beforeEach(() => {
    cy.visit('/name')
    cy.get('input[name=name]').type('John')
    cy.get('.survey-questions__name button.primary').click()
    cy.get('.survey-questions__goals .check-button:eq(0)').click()
    cy.get('.survey-questions__goals button.primary').click()
    cy.get('h1').should(
      'contain.text',
      'Do you follow a particular diet?'
    )
  })

  it('asks for diet', () => {
    cy.get('.check-button:eq(5)').should('contain.text', 'Plant-based').click()
    cy.get('.survey-questions__diet  button.primary').click()
    cy.location('pathname').should('eq', '/dob')
  })

  it("can't submit without selection", () => {
    cy.get('button.primary').should('have.attr', 'disabled')
  })

  it('Remembers name when returning from next page', () => {
    cy.get('.check-button:eq(5)').click()
    cy.get('.survey-questions__diet button.primary').click()
    cy.location('pathname').should('eq', '/dob')
    cy.get('.survey-questions__dob .back-button').click()
    cy.location('pathname').should('eq', '/diet')
    cy.get('.check-button:eq(5)').should('have.class', 'check-button--selected')
  })
})
