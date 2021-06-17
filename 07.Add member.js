/// <reference types="cypress" />
describe('Add Member functionality', function() {
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
    let num1
    function Writefile() {
      cy.get('tr:nth-child(1) > td:nth-child(3)').then(($span) => {
        // capture what num is right now
        const num1 = $span.text()
        cy.writeFile('cypress/integration/TestBox/test.txt', num1)
      })
    }
      function userID_Alpha() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for (var i = 0; i < 5; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
      }
        let email1='Member'+userID_Alpha()+'@mailinator.com'
        it('Verify to Add Member', () => {
              cy.clearCookies()
          cy.visit('https://qa.testbox.build-release.com/signin')
          cy.get('input[name=email]').type('apoorvowner@yopmail.com')
          cy.get('input[name=password]').type('testbox123')
          cy.get('[type=submit]').should('be.visible').should('be.enabled').click().wait(3000)
              cy.wait(2000)
          cy.get('#OpenProfile').click()
            cy.get('[role=menu]').contains('Settings').click()
            cy.get('button:contains(Add New)').click()
            cy.get('[name=firstName]').clear().type("Apoorv"+userID_Alpha())
            cy.get('[name=lastName]').clear().type("Bansal"+userID_Alpha())
            cy.get('[name=title]').clear().type('Lead Engineer')
            cy.get('[name=email]').clear().type(email1)
            cy.get('[type=submit]').should('be.visible').should('be.enabled').click()
            cy.wait(2000)
            cy.go('back')
            Writefile()
            cy.log('.........Member added successfully.....')    
        })
        it('Verify to set password', () => {
         cy.readFile('cypress/integration/TestBox/test.txt').then((data1) => {
          cy.Member_set_password(data1)
          getIframeBody().find('[name=password]').should('be.visible').clear().type('testbox123')
          getIframeBody().find('[name=cnfpassword]').should('be.visible').clear().type('testbox123')
          getIframeBody().find('[type=submit]').should('be.visible').click({ force: true })
          cy.wait(2000)
          cy.log('.........Member added successfully.....')
         })    
        })
        it('Verify to edit the details of the Member', () => {
              cy.clearCookies()
          cy.visit('https://qa.testbox.build-release.com/signin')
          cy.get('input[name=email]').type('apoorvowner@yopmail.com')
          cy.get('input[name=password]').type('testbox123')
          cy.get('[type=submit]').should('be.visible').should('be.enabled').click().wait(3000)
              cy.wait(2000)
          cy.get('#OpenProfile').click()
            cy.get('[role=menu]').contains('Settings').click()
            cy.get(' tr:nth-child(1) > td.px-6.py-4 > a').click()
            cy.get('[name=firstName]').clear().type("Apoorv"+userID_Alpha())
            cy.get('[name=lastName]').clear().type("Bansal"+userID_Alpha())
            cy.get('[name=title]').clear().type('Lead Engineer')
            cy.get('[type=submit]').should('be.visible').should('be.enabled').click()
            cy.wait(2000)
            cy.contains('Successfully saved')
            cy.log('.........Member edited successfully.....')
        })
        it('Verify to Add Member by clicking on Add member button', () => {
              cy.clearCookies()
          cy.visit('https://qa.testbox.build-release.com/signin')
          cy.get('input[name=email]').type('apoorvowner@yopmail.com')
          cy.get('input[name=password]').type('testbox123')
          cy.get('[type=submit]').should('be.visible').should('be.enabled').click().wait(3000)
              cy.wait(2000)
          cy.get('#OpenProfile').click()
            cy.get('[role=menu]').contains('Settings').click()
            cy.get('button:contains(Add New)').click()
            cy.get('[name=firstName]').clear().type("Apoorv"+userID_Alpha())
            cy.get('[name=lastName]').clear().type("Bansal"+userID_Alpha())
            cy.get('[name=title]').clear().type('Lead Engineer')
            cy.get('[name=email]').clear().type("Member"+userID_Alpha()+'@yopmail.com')
            cy.get('[type=submit]').should('be.visible').should('be.enabled').click()
            cy.get('button:contains(Add Another)').should('be.enabled').click()
            cy.get('[name=firstName]').clear().type("Apoorv"+userID_Alpha())
            cy.get('[name=lastName]').clear().type("Bansal"+userID_Alpha())
            cy.get('[name=title]').clear().type('Lead Engineer')
            cy.get('[name=email]').clear().type("Member"+userID_Alpha()+'@yopmail.com')
            cy.get('[type=submit]').should('be.visible').should('be.enabled').click()
            cy.wait(2000)
            cy.log('.........Member added successfully.....')
        })
        it('Verify to Click on Go back button after adding the user', () => {
          cy.clearCookies()
          cy.visit('https://qa.testbox.build-release.com/signin')
          cy.get('input[name=email]').type('apoorvowner@yopmail.com')
          cy.get('input[name=password]').type('testbox123')
          cy.get('[type=submit]').should('be.visible').should('be.enabled').click().wait(3000)
          cy.wait(2000)
          cy.get('#OpenProfile').click()
            cy.get('[role=menu]').contains('Settings').click()
            cy.get('button:contains(Add New)').click()
            cy.get('[name=firstName]').clear().type("Apoorv"+userID_Alpha())
            cy.get('[name=lastName]').clear().type("Bansal"+userID_Alpha())
            cy.get('[name=title]').clear().type('Lead Engineer')
            cy.get('[name=email]').clear().type(userID_Alpha()+'@yopmail.com')
            cy.get('[type=submit]').should('be.visible').should('be.enabled').click()
            cy.get('button:contains(Go Back)').should('be.enabled').click()
            cy.wait(2000)
            cy.log('.........Member added successfully.....')   
        })
      })