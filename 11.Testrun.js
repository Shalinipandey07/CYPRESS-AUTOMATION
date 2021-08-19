/// <reference types="cypress" />
describe('Test run Check', function() {
    
    it('As an Admin/Owner I should be able to login successfully', ()=> {
        cy.signinURL()
        cy.Validcredentials('c@yopmail.com','password') //PASSED
        cy.wait(3000)
    })

    it('Verify the test run click functionality below favourite project section', ()=> {
        cy.get(':nth-child(3) > .text-xs > :nth-child(5)').click()
        cy.wait(6000)
    })

    it('verify to add a new test run', ()=> {
        cy.get('#new-test-run').click()
        cy.wait(2000)
        //cy.get('#add-test-run').click()//User should get blank field validation message
        cy.get(':nth-child(2) > .mt-1 > .appearance-none').type('TEST RUN-3')
        cy.get('[name=assignTo]').click()
        cy.get('[value="Shalini Pandey"]').click()
        //cy.get('input[value="Kajal Snehi"]').click()
        cy.get(':nth-child(4) > .mt-1 > .appearance-none').click()
        cy.get('.resize-y').should('be.visible').type('DESCRIPTION')
        cy.get(['type=submit']).click()
    })
        })