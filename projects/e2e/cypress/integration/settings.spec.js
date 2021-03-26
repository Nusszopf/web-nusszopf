context('Settings', () => {
  before(() => {
    cy.visit('/')
    cy.login()
  })

  beforeEach(() => {
    Cypress.Cookies.preserveOnce('a0:state', 'a0:session')
  })

  it('User can view settings', () => {
    expect(true).to.equal(false)
  })

  it('User can delete account', () => {
    expect(true).to.equal(false)
  })
})
