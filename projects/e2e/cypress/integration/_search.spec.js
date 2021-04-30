export default xcontext('Search', () => {
  beforeEach(() => {
    cy.visit('/search')
  })

  it('User can search for projects', () => {
    expect(true).to.equal(true)
  })

  it('User can filter for specific projects', () => {
    expect(true).to.equal(true)
  })

  it('User can contact a project', () => {
    expect(true).to.equal(true)
  })
})
