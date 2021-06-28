/// <reference types="cypress" />
describe('Signup User', function () {
    function userID_Alpha() {
      var text = "org";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      for (var i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    }
        it('Verify to Signup with valid details', () => {
            cy.signupURL()
            cy.get('[type=name]').type('Apoorv Automation')
            cy.get('[type=email]').type('testbox'+userID_Alpha()+'@yopmail.com')
            cy.get('[name=org]').type(userID_Alpha())
            cy.get('[name=password]').type('testbox123')
            cy.get('[name=cnfpassword]').type('testbox123')
            cy.get('[name=termAndCondition]').check().should('be.checked')
            cy.get('[type=submit]').should('be.visible').should('be.enabled').click()
            cy.wait(2000)
            cy.contains('Signed up successfully')
            cy.url().should('include','signin')
            cy.log('........Test case passed with complete signup process.......')
        })
        it('Verify to Signup with Same email address details', () => {
          cy.signupURL()
          cy.get('[type=name]').type('Apoorv Automation')
          cy.get('[type=email]').type('testbox11@yopmail.com')
          cy.get('[name=org]').type(userID_Alpha())
          cy.get('[name=password]').type('testbox123')
          cy.get('[name=cnfpassword]').type('testbox123')
          cy.get('[name=termAndCondition]').check().should('be.checked')
          cy.get('[type=submit]').should('be.visible').should('be.enabled').click()
          cy.wait(2000)
          cy.contains('User with this email id already exists')
          cy.url().should('include','signup')
          cy.log('........Test case passed user with same email address already exists........')
      })
  })