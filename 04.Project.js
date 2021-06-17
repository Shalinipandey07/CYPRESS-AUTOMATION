/// <reference types="cypress" />
describe('Project Validations Test', function() {
    function userID_Alpha() {
      var text = "project";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      for (var i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    }
      beforeEach(function(){
          cy.Validcredentials('apoorvowner@yopmail.com','testbox123')
          cy.log('User is logged in Successfully.')
      })
      it('Verify to Create project', () => {
        cy.wait(2000)
          cy.get('button:contains(New Project)').click()
          cy.get('[name=name]').type(userID_Alpha())
          cy.get('[name=description]').type('This is the Automation Description of the project')
          cy.get('[type=submit]').should('be.visible').should('be.enabled').click()
          cy.wait(2000)
          cy.contains('Successfully added')
          cy.log('.........Project Created successfully.....')
      })
      it('Verify to Edit project', () => {
       cy.get('#headlessui-menu-button-1').click()
       cy.get('#headlessui-menu-items-7').contains('Edit').click()
       cy.get('[name=name]').clear().type("Edit"+userID_Alpha())
       cy.get('[name=description]').clear().type('This is the Automation Description of the project')
       cy.get('[type=submit]').should('be.visible').should('be.enabled').click()
       cy.wait(2000)
       cy.contains('Successfully saved')
       cy.log('......... User has successfully updated the project name.......')
      })
      it('Verify view link is clickable and redirects to Add Testcase page', () => {
        cy.get('#headlessui-menu-button-1').click()
        cy.get('#headlessui-menu-items-7').contains('View').click()
        cy.url().should('include','projects/')
        cy.log('....... View button is clickable......')
       })
    })