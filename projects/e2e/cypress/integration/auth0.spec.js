context('Auth0', () => {
  before(() => {
    cy.visit('/')
  })

  it('User can login', () => {
    cy.get('[data-test="route_search-page"]').click()
    expect(true).to.equal(false)
  })

  it('User can logout', () => {
    expect(true).to.equal(false)
  })

  it('User can register', () => {
    expect(true).to.equal(false)
  })

  it('User can request new password', () => {
    expect(true).to.equal(false)
  })

  it('User can change password', () => {
    expect(true).to.equal(false)
  })
})
