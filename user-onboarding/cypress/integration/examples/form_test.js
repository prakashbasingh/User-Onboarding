

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
    })

    
})