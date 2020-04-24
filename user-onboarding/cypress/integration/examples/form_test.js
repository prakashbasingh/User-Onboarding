

it('works!', () => {
    expect (5).to.eq(5)
    expect (5).to.eq(5)
    expect (65).to.eq(65)
    expect (5).to.eq(5)
    expect (5).to.eq(5)
    expect (5).to.eq(5)

})

describe ('Member Form', () => {
    it('can navigate to the site', ()=> {
        cy.visit('http://localhost:3000')
    })
    
})