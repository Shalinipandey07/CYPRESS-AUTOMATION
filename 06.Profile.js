// <reference types="cypress" />
describe('Profile Update Test', function() {
    function userID_Alpha() {
      var text = " ";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      for (var i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    }
      beforeEach(function(){
          cy.login('shalini03@yopmail.com','12345678')
          cy.log('User is logged in Successfully.')
      })
      it('Verify to Update Name and organization field', () => {
        cy.wait(4000)
        cy.get('#OpenProfile').click()
          cy.get('[role=menu]').contains('Profile').click()
          cy.get('[name=firstName]').clear().type('Shaliniiiiiiii')
          cy.get('[name=lastName]').clear().type('Pandeyyyyyyy')
          cy.get('[name=organization]').clear().type('Crownstack')
          cy.get('#update-profile').should('be.visible').click({force: true})
          cy.wait(2000)
          cy.contains('Profile updated successfully')
          cy.log('.........Profile Updated successfully.....')
      })

     
      it('Verify that the name field should not accept more than 32 char', () => {
        cy.wait(2000)
        cy.get('#OpenProfile').click()
          cy.get('[role=menu]').contains('Profile').click()
          cy.get('[name=firstName]').clear().type('Shalinidgdrgdthhhhrthsrtttttttttttttttttttttttttttttttttttttttttttttttjgggggggggggggggggggggggggg')
          cy.get(':nth-child(2) > :nth-child(2) > .mt-1 > .appearance-none').click()
          cy.contains('First Name must be between 1 to 32 characters.')
        })
        it('Verify that the name field should only accept characters', () => {
          cy.wait(2000)
          cy.get('#OpenProfile').click()
            cy.get('[role=menu]').contains('Profile').click()
            cy.get('[name=firstName]').clear().type('Shalini1yk73')
            cy.get(':nth-child(2) > :nth-child(2) > .mt-1 > .appearance-none').click()
            cy.get('.text-red-600').contains('First Name is not valid')
            cy.get('[name=lastName]').clear().type('Shalini1233973')
            cy.get(':nth-child(2) > .mr-4 > .mt-1 > .appearance-none').click()
            cy.get(':nth-child(2) > .text-red-600').contains('Last Name is not valid')
          })

      it('Verify that email field is non clickable and non editable', () => {
        cy.wait(2000)
        cy.get('#OpenProfile').click()
          cy.get('[role=menu]').contains('Profile').click()
          cy.get('[type=email]').should('be.disabled')
          cy.get('[type=submit]').should('be.visible').click()
          cy.log('.........Email field is disabled and non clickable.....')
      })
      it('Verify old password and new password should not be same', () => {
        cy.wait(2000)
        cy.get('#OpenProfile').click()
          cy.get('[role=menu]').contains('Profile').click()
          cy.get('span:contains(Password)').click()
          cy.get('[name=oldPassword]').clear().type('12345678')
          cy.get('[name=newPassword]').clear().type('12345678')
          cy.get('[type=submit]').should('be.visible').click()
          cy.contains('Old and new password cannot be same')
          cy.log('.......Old password cannot be same as new password......')
      })

      it('Verify new password and confirm password should be same', () => {
        cy.wait(2000)
        cy.get('#OpenProfile').click()
          cy.get('[role=menu]').contains('Profile').click()
          cy.get('span:contains(Password)').click()
          cy.get('[name=oldPassword]').clear().type('12345678')
          cy.get('[name=newPassword]').clear().type('12345678')
          cy.get('[name=confirmPassword]').clear().type('1234567891213')
          cy.get('[type=submit]').should('be.visible').click()
          cy.contains('Both passwords need to be the same')
          cy.log('.......Both passwords need to be  same......')
      })
      it('Verify user is able to update password', () => {
        cy.wait(2000)
        cy.get('#OpenProfile').click()
          cy.get('[role=menu]').contains('Profile').click()
          cy.get('span:contains(Password)').click()
          cy.get('[name=oldPassword]').clear().type('12345678')
          cy.get('[name=newPassword]').clear().type('password123')
          cy.get('[name=confirmPassword]').clear().type('password123')
          cy.get('[type=submit]').should('be.visible').click()
          cy.contains('Password updated successfully')
          cy.wait(2000)
          cy.get('[name=oldPassword]').clear().type('password123')
          cy.get('[name=newPassword]').clear().type('12345678')
          cy.get('[name=confirmPassword]').clear().type('12345678')
          cy.get('[type=submit]').should('be.visible').click()
          cy.log('.......Password is updated successfully......')
      })
    })