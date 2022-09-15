// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//

//const { add } = require("cypress/types/lodash")

// -- This is a parent command --
Cypress.Commands.add('loginWeb', (email, password) => { 
    //click navigation account bar
    cy.get('#navbarAccount').click() 
    //click login button
    cy.get('#navbarLoginButton').click() 
    //input email, password and click login
    cy.get('#email').type(email)
    cy.get('#password').type(password)
    cy.get('#loginButton').should('be.visible').click()
})

Cypress.Commands.add('fillinAddress', (country, name, mobile, zipcode, address, city, state) => { 
    //Provide address information
    cy.get('input[placeholder="Please provide a country."]').type(country)
    cy.get('input[placeholder="Please provide a name."]').type(name)    
    cy.get('input[placeholder="Please provide a mobile number."]').type(mobile)    
    cy.get('input[placeholder="Please provide a ZIP code."]').type(zipcode)
    cy.get('#address').type(address)
    cy.get('input[placeholder="Please provide a city."]').type(city)    
    cy.get('input[placeholder="Please provide a state."]').type(state)    
})

Cypress.Commands.add('dismissDialogAndAcceptCookie', () =>{
    if(cy.get('#mat-dialog-0')){
        cy.get('.close-dialog').click()
      }    
    cy.get('.cc-btn').click()
})

Cypress.Commands.add('clickBasket', () =>{
    cy.get('body > app-root > div > mat-sidenav-container > mat-sidenav-content > app-navbar > mat-toolbar > mat-toolbar-row > button.mat-focus-indicator.buttons.mat-button.mat-button-base.ng-star-inserted').click()
})

Cypress.Commands.add('removeItemFromBasket', ()=>{
    cy.get('.fa-layers-counter.fa-layers-top-right.fa-3x.warn-notification').invoke('text').then(numberOfItem =>{                
        if(numberOfItem == 1){
            cy.get('body > app-root > div > mat-sidenav-container > mat-sidenav-content > app-basket > mat-card > app-purchase-basket > mat-table > mat-row > mat-cell.mat-cell.cdk-cell.cdk-column-remove.mat-column-remove.ng-star-inserted > button').click()
        }
        else{
            //remove 1st item
            cy.get('body > app-root > div > mat-sidenav-container > mat-sidenav-content > app-basket > mat-card > app-purchase-basket > mat-table > mat-row:nth-child(2) > mat-cell.mat-cell.cdk-cell.cdk-column-remove.mat-column-remove.ng-star-inserted > button').click()
            //remove 2nd item
            cy.get('body > app-root > div > mat-sidenav-container > mat-sidenav-content > app-basket > mat-card > app-purchase-basket > mat-table > mat-row:nth-child(3) > mat-cell.mat-cell.cdk-cell.cdk-column-remove.mat-column-remove.ng-star-inserted > button').click()
        }
    })
    
})

Cypress.Commands.add('clickCheckOutButton', () =>{
    cy.get('#checkoutButton').click()
})

Cypress.Commands.add('clickAddNewAddress', () =>{
    cy.get('#card > app-address > mat-card > div > button').click()
})


//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })