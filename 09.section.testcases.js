/// <reference types="cypress" />
describe('Add Section and delete section', function() {
    function userID_Alpha() {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    }
      beforeEach(function(){
          cy.Validcredentials('apoorvowner@yopmail.com','testbox123')
          cy.log('User is logged in Successfully.')
      })
      it('Verify to Add section', () => {
        cy.wait(2000)       
        cy.get('tr:nth-child(1) > td.pr-6 > div').click()
        cy.get('.py-1').contains('View').click()
        cy.url().should('include','projects/')
        cy.get('button:contains(New Section)').click()
        cy.get('[name=name]').clear().type('Section'+userID_Alpha())
        cy.get('[name=description]').clear().type('Section Description')
        cy.get('[type=submit]').should('be.visible').should('be.enabled').click()
        cy.wait(2000)
          cy.log('.........Section created successfully.....')
      })
      it('Verify to edit a section', () => {
        cy.wait(2000)       
        cy.get('tr:nth-child(1) > td.pr-6 > div').click()
        cy.get('.py-1').contains('View').click()
        cy.url().should('include','projects/')
        cy.get(' div:nth-child(2) > span.float-right > svg:nth-child(1)').click()
        cy.get('[name=name]').clear().type('EditSection'+userID_Alpha())
        cy.get('[name=description]').clear().type('Section Description')
        cy.get('[type=submit]').should('be.visible').should('be.enabled').click()
        cy.wait(2000)
          cy.log('.........Section edited successfully.....')
      })
      // it('Verify to Create a Test case and assign a section', () => {
      //   cy.get('#headlessui-menu-button-1').click()
      //   cy.get('#headlessui-menu-items-7').contains('View').click()
      //   cy.url().should('include','projects/')
      //   cy.get('button:contains(New Test Case)').click()
      //   cy.get('[name=sectionId]').select(2)
      //   cy.get('[name=title]').clear().type('Verify the Element is clickable'+userID_Alpha())
      //   cy.get('[name=preconditions]').type('QA Site should be up and running')
      //   cy.get('[name=steps]').type('Go to QA Link and Enter the credentials')
      //   cy.get('[name=expectedresult]').type('User should be enter the credentials')
      //   cy.get('[type=submit]').should('be.visible').should('be.enabled').click()
      //   cy.contains('Successfully added')
      //   cy.log('....... User is able to add the test case......')
      //  })
      it('Verify to Delete a section', () => {
        cy.wait(2000)       
        cy.get('tr:nth-child(1) > td.pr-6 > div').click()
        cy.get('.py-1').contains('View').click()
        cy.url().should('include','projects/')
        cy.get('div:nth-child(2) > span.float-right > svg:nth-child(2)').click()
        cy.get('button:contains(Delete)').should('be.visible').should('be.enabled').click()
          cy.wait(2000)
          cy.log('.........Section deleted Successfully.....')
      })
    })