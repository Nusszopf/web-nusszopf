context('LandingPage', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('[CTA] User can navigate to search-page', () => {
    cy.get('[data-test="route_search-page"]').last().click()
    cy.location().should(location => {
      expect(location.href).to.equal('https://web.dev.nusszopf.org/search')
    })
  })

  it('[CTA] User can navigate to create-project-page', () => {
    cy.get('[data-test="route_create-project-page"]').click()
    cy.location().should(location => {
      expect(location.href).to.match('/^https://auth.nusszopf.org/login/')
    })
  })
})
