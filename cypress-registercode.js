/// <reference types="cypress" />
describe('Healthcare suit',function() {
    it('Healthcare testcase',function() {

        cy.visit('http://202.51.74.168:302/Home/Index#/Dispensary/ActivateDispensary')

        
        cy.get('#username_id').type('admin')
        cy.wait(1000)
        cy.get('#password').type('pass123')
        cy.wait(1000)
        cy.get('#login').click()
        
        cy.contains('Dispensary').click()
        cy.wait(2000)
        cy.contains('SocialService').click()
        cy.wait(2000)
        cy.contains('OperationTheatre').click()
        cy.wait(2000)
        cy.contains('DynamicReport').click()
        cy.wait(2000)
        cy.contains('Doctor').click()
        cy.wait(2000)
        cy.contains('Appointment').click()
        cy.wait(2000)
        // cy.get(':nth-child(5) > .counter > .counter-item')
        // cy.wait(2000)
        // cy.get('#quickFilterInput').type('Dee')
        // cy.wait(2000)
        cy.get('.btn').click()
        cy.wait(2000)
        cy.get('[href="#/Patient"]').contains('Patient').click();

        //cy.get('[href="#/Patient"]').invoke('text').should('include', 'Patient').click('Patient')
        // cy.get('#Patient > :nth-child(2) > .nav-link > .title')
        // cy.wait(2000)
        // cy.get('#Patient > :nth-child(2) > .nav-link > .title').click()
        cy.get('.page-breadcrumb > :nth-child(3) > a').click()
        cy.get('#regPatFirstName').type("Amby")
        cy.get('#LastName').type("TECHVASI")
        // cy.wait('2000')
        cy.get('#Age').type('30')
        //cy.wait('1000')
        cy.get('#AgeUnit').select('Y').should('have.value','Y')
        //cy.wait('1000')
        cy.get('#PhoneNumber').type('9632196323')
        cy.get('#ddlDistrict').type('Karnataka')
        cy.get('#WardNumber').type('6')
        cy.get('#Gender').select('Male').should('have.value','Male')
        cy.wait(2000)
        cy.get(':nth-child(4) > .col-md-8 > .input-group > .icheck-inline > :nth-child(1) > span').click()
        cy.get(':nth-child(2) > :nth-child(9) > .col-md-8 > .form-control').type('Techvasi@gmail.com')

      //  cy.get('.form-control').select('Other').should('have.value','Other')

      //cy.get('.form-control').select('Dalit');
      cy.get(':nth-child(2) > :nth-child(3) > .col-md-8 > .form-control').select('Other').should('have.value','Other')

      cy.get('.nav > :nth-child(2) > a').click()

      cy.get(':nth-child(1) > .col-md-8 > .form-control').select('Permanent').should('have.value','Permanent')
      
      cy.get('#Street').type('Domlur')

      cy.get('#ddlCountrySubDivision').type('India')

      cy.get('#City').type('India')

      cy.get('.sub-navtab > .nav > :nth-child(3) > a').click()
      cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > .form-control').type('Brother')
      cy.get('#GuarantorName').type('Ramesh')
      cy.get('.icheck-inline > :nth-child(1) > span').click()
      cy.get(':nth-child(1) > :nth-child(4) > .col-md-8 > .form-control').type('9876654367')

      cy.get('.sub-navtab > .nav > :nth-child(4) > a').click()
      cy.get('.row > :nth-child(1) > .col-md-8 > .form-control').type("Insourance company")
      cy.get('.row > :nth-child(3) > .col-md-8 > .form-control').type('9857456123')
      cy.get('#InsuranceNumber').type('55')
      cy.get('#IMISNumber').type('69854')
      cy.get('#InitialBalance').type('2000')

      cy.get('.nav > :nth-child(5) > a').click()
      cy.get('.icheck-inline > :nth-child(1) > span').click()
      cy.get('#FirstName').type('Mohan')
      cy.get('#LastName').type('Roy')
      cy.get('#Relationship').type('Father')
      cy.get('#regPatientSubmitBtn').click()
      
      
      cy.wait(1000)

        //cy.get('[href="#/Patient"]').should('contains','Patient')
        // cy.contains('Patient').click()
        // cy.wait(2000)
        // cy.contains('Register Patient').click()
        // cy.wait(2000)
        
        
    })
})