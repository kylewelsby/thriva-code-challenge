/// <reference types="cypress" />

context('Onboarding - DoB', () => {
  beforeEach(() => {
    cy.visit('/name')
    cy.get('input[name=name]').type('John')
    cy.get('.survey-questions__name button.primary').click()
    cy.get('.survey-questions__goals .check-button:eq(0)').click()
    cy.get('.survey-questions__goals button.primary').click()
    cy.get('.survey-questions__diet .check-button:eq(0)').click()
    cy.get('.survey-questions__diet button.primary').click()
    cy.get('h1').should(
      'contain.text',
      'How old are you?'
    )
  })

  it("can't submit without selection", () => {
    cy.get('button.primary').should('have.attr', 'disabled')
  })

  it('asks for date of birth', () => {
    cy.get('.input__dob__day input').type('1')
    cy.get('.input__dob__month input').type('1')
    cy.get('.input__dob__year input').type('1970')

    cy.get('button.primary').click()
    cy.location('pathname').should('eq', '/gender')
  })

  it('Remembers name when returning from next page', () => {
    cy.get('.input__dob__day input').type('1')
    cy.get('.input__dob__month input').type('1')
    cy.get('.input__dob__year input').type('1970')
    cy.get('button.primary').click()
    cy.location('pathname').should('eq', '/gender')
    cy.get('.survey-questions__gender .back-button').click()
    cy.get('.input__dob__day input').should('have.value', '1')
    cy.get('.input__dob__month input').should('have.value', '1')
    cy.get('.input__dob__year input').should('have.value', '1970')
  })
})
