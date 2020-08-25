/// <reference types="cypress" />

context('Onboarding - Gender', () => {
  beforeEach(() => {
    cy.visit('/name')
    cy.get('input[name=name]').type('John')
    cy.get('input[name=name]').type('John')
    cy.get('.survey-questions__name button.primary').click()
    cy.get('.survey-questions__goals .check-button:eq(0)').click()
    cy.get('.survey-questions__goals button.primary').click()
    cy.get('.survey-questions__diet .check-button:eq(0)').click()
    cy.get('.survey-questions__diet button.primary').click()
    cy.get('.input__dob__day input').type('1')
    cy.get('.input__dob__month input').type('1')
    cy.get('.input__dob__year input').type('1970')
    cy.get('.survey-questions__dob button.primary').click()

    cy.get('h1').should(
      'contain.text',
      'Are you…'
    )
  })

  it("can't submit without selection", () => {
    cy.get('button.primary').should('have.attr', 'disabled')
  })

  it('asks for diet', () => {
    cy.get('.check-button:eq(1)').should('contain.text', 'Female').click()
    cy.get('button.primary').click()
  })

  it('Remembers name when returning from next page', () => {
    cy.get('.check-button:eq(1)').click()
    cy.get('button.primary').click()
    cy.get('.back-button').click()
    cy.get('button.primary').click()
    cy.get('.check-button:eq(1)').should('have.class', 'check-button--selected')
  })
})
