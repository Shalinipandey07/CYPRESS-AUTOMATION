/// <reference types="cypress" />
describe('To Do tab Check', function() {
    
    it('As an Admin/Owner I should be able to login successfully', ()=> {
        cy.signinURL()
        cy.Validcredentials('c@yopmail.com','password') //PASSED
        cy.wait(6000)
    })

    it('As an Admin/Owner I should be able to verify the todo tab elements', ()=> {
        cy.wait(2000)
        cy.get(':nth-child(3) > .text-xs > :nth-child(2)').click()
        cy.wait(4000)
        //cy.get('.bg-gray-200').contains('ToDo Test Runs')
        cy.get(':nth-child(1) > .max-w-0 > .flex > .truncate > span').click()
        cy.get('.text-indigo-600 > path').click()
        cy.get('.flex-1 > .ml-3').click()
        cy.get('#pagination > .px-4 > .flex-1 > :nth-child(1)').click()
        cy.wait(2000)
        cy.get('#headlessui-menu-button-1').click()
        cy.get('#headlessui-menu-item-8').click({force: true})
        cy.get('.mt-4 > .py-1\.5').click()

    })
})