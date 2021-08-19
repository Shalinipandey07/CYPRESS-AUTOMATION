/// <reference types="cypress" />
describe('Regression Ananlysis', function() {
    
        beforeEach(function(){
            cy.login('shalini03@yopmail.com','12345678')
            cy.log('User is logged in Successfully.')
    
        cy.wait(4000)
        })
    it('As an Admin/Owner I should be able create a new project successfully', ()=> {
        cy.wait(2000)
        cy.get('button:contains(New Project)').click()
        cy.get('.space-y-6 > :nth-child(1) > .text-base').contains('Create New Project')
        cy.get('.space-y-6 > :nth-child(1) > .text-sm').contains('Please fill in details of your new project.')
        cy.get('.appearance-none').type('Test4')
        cy.get('.resize-y').type('this is testbox project description')
        cy.get('#project-create-edit').click()
        cy.wait(2000)
        cy.get('button:contains(Back)').click()
        cy.wait(2000)
        cy.log('.........User should get redirected to the dashboard page........')
        
})
it('As an Admin/Owner I should be able to edit a project', ()=> {
    //cy.get('.mt-4 > .inline-flex').click()
    cy.get('#headlessui-menu-button-1 > .w-5 > path').click()
    cy.get('#headlessui-menu-item-10').contains('Edit').click()
    cy.wait(2000)
    cy.get('.appearance-none').clear().type('TEST-BOX2')
    cy.get('#project-create-edit').click()
    cy.wait(2000)
    cy.log('.......PROJECT EDITED SUCCESSFULLY........')

})
it('Verify view button is clickable and redirects to Overview  page', () => {
    cy.get(':nth-child(6) > .max-w-0 > .flex > .truncate > span').click()
    //cy.get('#headlessui-menu-items-12').contains('View').click()
    cy.url().should('include','projects/')
    cy.get('.mt-4 > .inline-flex')
    cy.log('....... View button is clickable......')
   })
it('As an Admin/Owner I should not be able to create a new project with already existing project name', ()=> {
    cy.get('button:contains(New Project)').click()
    cy.get('.space-y-6 > :nth-child(1) > .text-base').contains('Create New Project')
    cy.get('.space-y-6 > :nth-child(1) > .text-sm').contains('Please fill in details of your new project.')
    cy.get('.appearance-none').type('QUICKHANDS')
    cy.get('.resize-y').type('this is project description')
    cy.get('#project-create-edit').click()
    cy.contains('Project with same name already exists')
    cy.log('.......User should be able to see a toaster having message "project with same name already exists"')
    //cy.get('button:contains(Cancel)').should('be.enabled').click()
    //cy.log('.....User should get redirected to the dashboard page ')
})
it('As an Admin/Owner I should be able to delete a project successfully', ()=> {
    cy.get('#headlessui-menu-button-2 > .w-5').click()
    cy.get('#headlessui-menu-item-12').contains('Delete').click()
    cy.contains('Are you sure want to delete the project "Delete project"?')
    cy.get('.mt-5 > .text-white').click()
    cy.contains('Project deleted successfully')
    cy.log('User should be able to delete a project')
})
})