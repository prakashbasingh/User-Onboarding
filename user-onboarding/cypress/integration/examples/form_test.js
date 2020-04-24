

it('works!', () => {
    expect (5).to.eq(5)
    expect (5).to.eq(5)
    expect (65).to.eq(65)
    expect (5).to.eq(5)
    expect (5).to.eq(5)
    expect (5).to.eq(5)

})

describe ('Member Form', () => {
    //navigating to the project form
    it('can navigate to the site', ()=> {
        cy.visit('http://localhost:3000')
    })

    //testing valid name input
    it('can type a username', ()=> {
            cy.get('input[name = "username"]')
            .type('Prakash')
            .should('have.value', 'Prakash')      
    })

    //testing valid email input
    it('can type the email', () =>{
        cy.get('input[name = "email"]')
        .type('pk@pk.com')
        .should('have.value', 'pk@pk.com')
    })

    //testing valid password input
    it('can type a password', () =>{
        cy.get('input[name = "password"]')
        .type('aabbccddeeff')
        .should('have.value', 'aabbccddeeff')
    })




})