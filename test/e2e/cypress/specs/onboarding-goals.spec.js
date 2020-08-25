/// <reference types="cypress" />

context('Onboarding - Goals', () => {
  beforeEach(() => {
    cy.visit('/name')
    cy.get('input[name=name]').type('John')
    cy.get('button.primary').click()
    cy.get('h1').should(
      'contain.text',
      'Nice to meet you John. What would you like to focus on?'
    )
  })

  it('toggles goals', () => {
    cy.get('.check-button:eq(0)').click().should('have.class', 'check-button--selected')
    cy.get('.check-button:eq(1)').click().should('have.class', 'check-button--selected')
    cy.get('.check-button:eq(2)').click().should('have.class', 'check-button--selected')
    cy.get('.check-button:eq(3)').click().should('have.class', 'check-button--selected')
    cy.get('button.primary').click()
    cy.location('pathname').should('eq', '/diet')
  })

  it('allows only 4 options', () => {
    cy.get('.check-button:eq(0)').click()
    cy.get('.check-button:eq(1)').click()
    cy.get('.check-button:eq(2)').click()
    cy.get('.check-button:eq(3)').click()
    cy.get('.check-button:eq(4)').should('have.class', 'check-button--disabled')
  })
})
