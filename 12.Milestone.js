/// <reference types="cypress" />
describe('Milestone tab Check', function() {
    
    it('As an Admin/Owner I should be able to login successfully', ()=> {
        cy.signinURL()
        cy.Validcredentials('c@yopmail.com','password') //PASSED
        cy.wait(3000)
    })

    it('Verify the milestone click functionality below favourite project section', ()=> {
        cy.get(':nth-child(3) > .text-xs > :nth-child(3)').click()
        cy.wait(6000)
        cy.get('#new-test-run').click()
        cy.wait(2000)
    })
    it('New Milestone Creation', ()=> {
        cy.get('.text-lg').contains('Create New Milestone')
        cy.get(':nth-child(1) > .mt-1').contains('Please fill in details of your new milestone.')
        cy.get('.mt-1 > .appearance-none').type('Milestone1')
        cy.get('#startDate').click()
        cy.get('.react-datepicker__day--026').click()
        cy.get('#endDate').click()
        cy.get('.react-datepicker__day--029').click({ multiple: true })
        cy.get('.resize-y').type('DESCRIPTION')
        cy.get('#add-milestone').click()
        cy.wait(4000)
        cy.get('.pt-4 > .flex-col > .-my-2 > #test-run-list > .overflow-hidden > .min-w-full > .bg-white > :nth-child(1) > :nth-child(1) > .font-medium > span').click()
        cy.wait(6000)
        cy.get('.m-2 > :nth-child(1) > .px-4').contains('Description')
        cy.get('.m-2 > :nth-child(2)').should('be.visible')
        cy.get('.m-2 > .justify-center').should('be.visible').contains('No active test runs in this milestone.')
        cy.get('.mt-4 > .inline-flex').click()
        cy.get('.pt-4 > .items-center').dblclick({multiple: true})
        cy.get('.pt-2 > .items-center').dblclick()
        cy.get('.overflow-hidden > .pt-4 > .flex').click()
        cy.get('.pt-4 > .flex-col > .-my-2 > #test-run-list > .overflow-hidden > .min-w-full > .bg-white > :nth-child(1) > :nth-child(4) > .flex > div > .text-indigo-600 > path').click()
        cy.get('.pt-4 > .flex-col > .-my-2 > #test-run-list > .overflow-hidden > .min-w-full > .bg-white > :nth-child(1) > :nth-child(4) > .flex > div > .text-indigo-600 > path').click({force: true})
        cy.get('[type=button]').click({multiple: true, force: true})//Mark as completed
        //cy.get('.pt-4 > .flex-col > .-my-2 > #test-run-list > .overflow-hidden > .min-w-full > .bg-white > :nth-child(1) > :nth-child(4) > .flex > :nth-child(1)').click()
        //cy.get('.mt-1 > .appearance-none').type('MILESTONE EDITED')
        //cy.get('.resize-y').type('this is edited milestone, due date of this milestone is 22/july/2021')
        //cy.get('#edit-milestone').click()
        

    })
})