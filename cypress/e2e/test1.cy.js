
describe('My First Test', () => {
    
    it('Does not do much!', () => {
        cy.visit("https://katalon.com/web-testing")
        cy.get('.get-started').click()
        cy.get('.button_sign_in').click()

    })


  })