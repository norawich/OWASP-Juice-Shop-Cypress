describe('verify_apple_keyword_search_display_correctly', () => {  

    before(() =>{
        cy.visit('/')
        //dismiss dialog and accept fruit cookie
        cy.dismissDialogAndAcceptCookie()        
      });        

    it('verify search by apple keyword displays 2 products correctly', ()=>{
        const keyword = 'Apple'
        //click on search icon
        cy.get('.mat-search_icon-search').click()
        //input keyword search
        cy.get('#searchQuery > mat-form-field').type(`${keyword}{enter}`)
        //assert the result
        cy.get('div.item-name').then(itemName =>{
            return itemName
        })
        .should('contain', 'Apple')
    })

    it('verify the banana keyword search does not display', ()=>{
        //assert the result
        cy.get('div.item-name').then(itemName =>{
            return itemName
        })
        .should('not.contain', 'Banana')
    })

});