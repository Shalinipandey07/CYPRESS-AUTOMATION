/// <reference types="cypress" />
describe('login Test validation', function () {
    it('Verify to Login with valid credentials', () => {
        cy.Validcredentials('apoorvowner@yopmail.com','testbox123')
        cy.log('......User is logged in successfully........')
    })
    it('Verify to Login with unregistered credentials', () => {
        cy.clearCookies()
        cy.signinURL()
        cy.get('input[name=email]').type('testboxabc@gmail.com')
        cy.get('input[name=password]').type('testbox123')
        cy.get('[type=submit]').should('be.visible').should('be.enabled').click().wait(3000)
        cy.url().should('include','signin')
        cy.contains('Email/Password mismatch. Try again')
        cy.log('........Invalid Email id/password.......')
    })
    it('Verify to Login with invalid email Userid', () => {
      cy.clearCookies()
        cy.signinURL()
        cy.get('input[name=email]').type('testbox@@gmail.com')
        cy.get('input[name=password]').type('testbox123')
        cy.get('div:nth-child(1) > span').contains('Email is not valid')
        cy.get('[type=submit]').click().wait(3000)
        cy.url().should('include','signin')
        cy.log('........Invalid Email id validation.......')
    })
    it('Verify to navigate to signup page from login page', () => {
      cy.clearCookies()
        cy.signinURL()
        cy.get('a:contains(Sign up)').click()
        cy.url().should('include','signup')
        cy.log('........User is naviagted to signup page.......')
    })
  })