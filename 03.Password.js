/// <reference types="cypress" />
describe('Forgot Password', function () {
    const getIframeBody = () => {
      // get the iframe > document > body
      // and retry until the body element is not empty
      return cy
          .get('#html_msg_body')
          .its('0.contentDocument.body').should('not.be.empty')
          // wraps "body" DOM element to allow
          // chaining more Cypress commands, like ".find(...)"
          // https://on.cypress.io/wrap
          .then(cy.wrap)
  }
    it('Verify to click forgot password button', () => {
      cy.clearCookies()
        cy.signinURL()
        cy.get('.flex.items-center.justify-between > div.text-sm > span').click()
        cy.wait(2000)
        cy.get('[type=email]').type('testbox11@mailinator.com')
        cy.get('[type=submit]').should('be.visible').should('be.enabled').click()
        cy.contains('Password reset email sent!')
        cy.get('[type=button]').should('be.visible').should('be.enabled').click()
        cy.log('........Invalid Email id/password.......')
    })
    it('Verify to Reset password from email', () => {
      cy.set_password('testbox11@mailinator.com')
      getIframeBody().find('[name=password]').should('be.visible').clear().type('testbox123')
      getIframeBody().find('[name=cnfpassword]').should('be.visible').clear().type('testbox123')
      getIframeBody().find('[type=submit]').should('be.visible').click({ force: true })
      cy.wait(2000)
    })
    it('Verify to forgot password functionality with invalid details', () => {
      cy.clearCookies()
        cy.signinURL()
        cy.get('span:contains(Forgot your password?)').click()
        cy.wait(2000)
        cy.get('[type=email]').type('testbox11@@mailinator.com')
        cy.get('[type=submit]').should('be.visible').should('be.enabled').click()
        cy.contains('Email is not valid')
        cy.log('........Invalid Email id/password.......')
    })
    it('Verify to forgot password with unregistered email address', () => {
      cy.clearCookies()
        cy.signinURL()
        cy.get('span:contains(Forgot your password?)').click()
        cy.wait(2000)
        cy.get('[type=email]').type('testbox1123@mailinator.com')
        cy.get('[type=submit]').should('be.visible').should('be.enabled').click()
        cy.contains('User was not found with that Email. Try again.')
        cy.log('........Unregistered email address.......')
    })
    it('Verify back to login link on forgot password page', () => {
      cy.clearCookies()
        cy.signinURL()
        cy.get('span:contains(Forgot your password?)').click()
        cy.wait(2000)
        cy.get('.text-lg').click()
        cy.url().should('include','signin')
        cy.log('........User naviagted to login page.......')
    })
  })