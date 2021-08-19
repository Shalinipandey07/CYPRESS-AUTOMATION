/// <reference types="cypress" />
describe('Login test', function() {
    
    it('As an Owner/Admin I should be able to Login with registered credentials ', ()=> {
       cy.login('shalini03@yopmail.com', '12345678')
       cy.wait(2000)
       cy.get('.flex > .bg-gray-900')
    })
    it('As an Owner/Admin I should be able to Login with unregistered credentials ', ()=> {
        cy.signinURL()
        cy.get('[name=email]').type('abraham345@yopmail.com')
        cy.get('[name=password]').type('123456789')
        cy.get('input[type=checkbox]').check()
        cy.get('[id=login-submit]').click()
        cy.contains('Email/Password mismatch. Try again')
        cy.log('........User should get a validation error message.......')
    })

    it('To verify the blank field validation of login page ', ()=> {
        cy.signinURL()
        cy.get('[id=login-submit]').click()
        cy.get(':nth-child(1) > .text-red-600').contains('Email is required')
       // cy.get(':nth-child(1) > .text-red-600').contains('Password is required')
        cy.log('........USer should get a validation error message.......')
    })
    it('User should not be able to login with unregistered email id ', ()=> {
        cy.signinURL()
        cy.get('[name=email]').type('aban@yopmail.com')
        cy.get('[name=password]').type('12345678')
        cy.get('input[type=checkbox]').check()
        cy.get('[id=login-submit]').click()
        cy.log('........USer should get a validation error message.......')
    })
    it('verify to navigate to signup page from login page  ', ()=> {
        cy.signinURL()
        cy.get('a:contains(Sign up)').click()
        cy.url().should('include','signup')
        cy.log('........User is naviagted to signup page.......')
    })

})