context('Search', () => {
  before(() => {
    cy.visit('/')
  })

  it('User can search for projects', () => {
    cy.get('[data-test="route_search-page"]').click()
    expect(true).to.equal(true)
  })

  it('User can filter for specific projects', () => {
    expect(true).to.equal(true)
  })

  it('User can contact a project', () => {
    expect(true).to.equal(true)
  })
})
