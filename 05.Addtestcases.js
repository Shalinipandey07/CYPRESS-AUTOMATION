// <reference types="cypress" />
describe('Add Test case validations', function() {
    function userID_Alpha() {
      var text = "project";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      for (var i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    }
      beforeEach(function(){
          cy.Validcredentials('shalini03@yopmail.com','12345678')
          cy.log('User is logged in Successfully.')
      })
       it('Verify to Create a Test case', () => {
        cy.get('#headlessui-menu-button-1').click()
        cy.wait(2000)
        cy.get('#headlessui-menu-item-10').contains('View').click()
        cy.url().should('include','projects/')
        cy.get('button:contains(New Test Case)').click()
        cy.get('[name=title]').clear().type('Verify the Element is clickable'+userID_Alpha())
        cy.get('[name=preconditions]').type('QA Site should be up and running')
        cy.get('[name=steps]').type('Go to QA Link and Enter the credentials')
        cy.get('[name=expectedresult]').type('User should be enter the credentials')
        cy.get('[type=submit]').should('be.visible').should('be.enabled').click()
        cy.log('....... User is able to add the test case......')
       })
       it('Verify to edit a Test case', () => {
        cy.get('#headlessui-menu-button-1').click()
        cy.get('#headlessui-menu-items-7').contains('View').click()
        cy.url().should('include','projects/')
        cy.wait(2000)
        cy.get('div:nth-child(3) > table > tbody > tr:nth-child(1) > td.px-6.py-4>.flex>.mr-3').click({force: true})
        cy.get('[name=title]').clear().type('Verify to edit the test case '+userID_Alpha())
        cy.get('[name=preconditions]').clear().type('QA Site should be up and running')
        cy.get('[name=steps]').clear().type('Go to QA Link and Enter the credentials')
        cy.get('[name=expectedresult]').clear().type('User should be enter the credentials')
        cy.get('[type=submit]').should('be.visible').should('be.enabled').click()
        cy.log('....... user is able to edit the test case......')
       })
       it('Verify to view a Test case', () => {
        cy.get('#headlessui-menu-button-1').click()
        cy.get('#headlessui-menu-items-7').contains('View').click()
        cy.url().should('include','projects/')
        cy.wait(2000)
        cy.get('div:nth-child(3) > table > tbody > tr:nth-child(1) > td.px-6.py-4>a').click({force: true})
        cy.url().should('include','/testcase/')
        cy.log('....... user is able to view the test case......')
       })
       it('Verify to Delete a Test case', () => {
        cy.get('#headlessui-menu-button-1').click()
        cy.get('#headlessui-menu-items-7').contains('View').click()
        cy.url().should('include','projects/')
        cy.wait(2000)
        cy.get('div:nth-child(3) > table > tbody > tr:nth-child(1) > td.px-6.py-4>.flex>.mr-1').click({force: true})
        cy.get('button:contains(Delete)').click()
        cy.log('....... Test Case deleted successfully......')
       })
    })