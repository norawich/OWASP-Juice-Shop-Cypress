describe('verify_loginuser_add_multiple_products_success_checkout', () => {  

    before(() =>{
        cy.visit('/')
        //dismiss dialog and accept fruit cookie
        cy.dismissDialogAndAcceptCookie()
      });
    
      after(() =>{
        //click your basket    
        cy.clickBasket()
        //remove item from basket
        cy.removeItemFromBasket()           
      });
      
      it('Login with your user, add 2 items to the basket, click on checkout, add a new address, fill in the address form, click on submit', () => {        
        cy.loginWeb('norawich@gmail.com', 'conan')
        //add 1st product into basket
        cy.get('body > app-root > div > mat-sidenav-container > mat-sidenav-content > app-search-result > div > div > div.ng-star-inserted > mat-grid-list > div > mat-grid-tile:nth-child(1) > div > mat-card > div:nth-child(2) > button > span.mat-button-wrapper > span').click()
        //add 2st product into basket
        cy.get('body > app-root > div > mat-sidenav-container > mat-sidenav-content > app-search-result > div > div > div.ng-star-inserted > mat-grid-list > div > mat-grid-tile:nth-child(2) > div > mat-card > div:nth-child(2) > button > span.mat-button-wrapper > span').click()        
        //verify the basket has 2 item
        cy.get('.fa-layers-counter.fa-layers-top-right.fa-3x.warn-notification').should('have.text', 2)    
        //click your basket to go to basket page
        cy.clickBasket()
        //click checkout
        cy.clickCheckOutButton()          
        //click add new address
        cy.clickAddNewAddress()
        //fill in address
        cy.fillinAddress('Thailand', 'Norawich', '0818193720', '10110', '289/1052 the base condo', 'Bangkok', 'Bangkok')    
        //click submit button
        cy.get('#submitButton').click()    
        //verify the page url should be expected
        cy.url().should('contain', '/address/select')            
      })

})