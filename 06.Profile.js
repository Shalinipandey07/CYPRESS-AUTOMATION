/// <reference types="cypress" />
describe('Profile Update Test', function() {
    function userID_Alpha() {
      var text = " ";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      for (var i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    }
      beforeEach(function(){
          cy.Validcredentials('apoorvowner@yopmail.com','testbox123')
          cy.log('User is logged in Successfully.')
      })
      it('Verify to Update Name and organization field', () => {
        cy.wait(2000)
        cy.get('#OpenProfile').click()
          cy.get('[role=menu]').contains('Your Profile').click()
          cy.get('[name=firstName]').clear().type("Apoorv"+userID_Alpha())
          cy.get('[name=organization]').clear().type('Organization')
          cy.get('[type=submit]').should('be.visible').should('be.enabled').click()
          cy.wait(2000)
          cy.contains('Profile updated successfully')
          cy.log('.........Profile Updated successfully.....')
      })
      it('Verify that email field is non clickable and editabled', () => {
        cy.wait(2000)
        cy.get('#OpenProfile').click()
          cy.get('[role=menu]').contains('Your Profile').click()
          cy.get('[type=email]').should('be.disabled')
          cy.get('[type=submit]').should('be.visible').click()
          cy.log('.........Email field is disabled and non clickable.....')
      })
      it('Verify old password and new password should not be same', () => {
        cy.wait(2000)
        cy.get('#OpenProfile').click()
          cy.get('[role=menu]').contains('Your Profile').click()
          cy.get('span:contains(Password)').click()
          cy.get('[name=oldPassword]').clear().type('testbox123')
          cy.get('[name=newPassword]').clear().type('testbox123')
          cy.get('[type=submit]').should('be.visible').click()
          cy.contains('Old and new password can not be the same')
          cy.log('.......Old password cannot be same as new password......')
      })
      it('Verify user is able to update password', () => {
        cy.wait(2000)
        cy.get('#OpenProfile').click()
          cy.get('[role=menu]').contains('Your Profile').click()
          cy.get('span:contains(Password)').click()
          cy.get('[name=oldPassword]').clear().type('testbox123')
          cy.get('[name=newPassword]').clear().type('password123')
          cy.get('[name=confirmPassword]').clear().type('password123')
          cy.get('[type=submit]').should('be.visible').click()
          cy.wait(2000)
          cy.get('[name=oldPassword]').clear().type('password123')
          cy.get('[name=newPassword]').clear().type('testbox123')
          cy.get('[name=confirmPassword]').clear().type('testbox123')
          cy.get('[type=submit]').should('be.visible').click()
          cy.log('.......Password is updated successfully......')
      })
    })