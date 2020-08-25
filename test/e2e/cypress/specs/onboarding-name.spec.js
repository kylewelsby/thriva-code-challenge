/// <reference types="cypress" />

context('Onboarding - Name', () => {
  beforeEach(() => {
    cy.visit('/name')
    cy.get('h1').should(
      'contain.text',
      "Hey! We're Thriva. What’s your first name?"
    )
  })

  it('Allows progression to next page', () => {
    const button = cy.get('button.primary')
    button.should('have.attr', 'disabled')
    cy.get('input[name=name]').type('John')
    button.should('not.have.attr', 'disabled')
    cy.get('button.primary').click()
    cy.location('pathname').should('eq', '/goals')
  })

  it('Remembers name on next page', () => {
    cy.get('input[name=name]').type('John')
    cy.get('button.primary').click()
    cy.location('pathname').should('eq', '/goals')
    cy.get('h1').should('contain.text', 'Nice to meet you John. What would you like to focus on?')
  })

  it('Remembers name when returning from next page', () => {
    cy.get('input[name=name]').type('John')
    cy.get('button.primary').click()
    cy.location('pathname').should('eq', '/goals')
    cy.get('.back-button').click()
    cy.get('input[name=name]').should('have.value', 'John')
  })
})
