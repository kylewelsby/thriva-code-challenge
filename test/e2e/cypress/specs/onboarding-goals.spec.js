/// <reference types="cypress" />

context('Onboarding - Goals', () => {
  beforeEach(() => {
    cy.visit('/name')
    cy.get('input[name=name]').type('John')
    cy.get('.survey-questions__name button.primary').click()
    cy.get('h1').should(
      'contain.text',
      'Nice to meet you John. What would you like to focus on?'
    )
  })

  it("can't submit without selection", () => {
    cy.get('button.primary').should('have.attr', 'disabled')
  })

  it('toggles goals', () => {
    cy.get('.check-button:eq(0)').click().should('have.class', 'check-button--selected')
    cy.get('.check-button:eq(1)').click().should('have.class', 'check-button--selected')
    cy.get('.check-button:eq(2)').click().should('have.class', 'check-button--selected')
    cy.get('.check-button:eq(3)').click().should('have.class', 'check-button--selected')
    cy.get('.survey-questions__goals button.primary').click()
    cy.location('pathname').should('eq', '/diet')
  })

  it('allows only 4 options', () => {
    cy.get('.check-button:eq(0)').click()
    cy.get('.check-button:eq(1)').click()
    cy.get('.check-button:eq(2)').click()
    cy.get('.check-button:eq(3)').click()
    cy.get('.check-button:eq(4)').should('have.class', 'check-button--disabled')
  })

  it('Remembers name when returning from next page', () => {
    cy.get('.check-button:eq(1)').click()
    cy.get('.survey-questions__goals button.primary').click()
    cy.location('pathname').should('eq', '/diet')
    cy.get('.survey-questions__diet .back-button').click()
    cy.get('.check-button:eq(1)').should('have.class', 'check-button--selected')
  })
})
