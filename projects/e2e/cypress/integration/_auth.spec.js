export default context('Auth0', () => {
  before(() => {
    cy.visit('/')
  })

  it('User can register', () => {
    cy.get('[data-test="btn_burger_nav-header"]').click()
    cy.get('[data-test="btn_login_nav-header"]').click()
    cy.get('[data-reach-tab-list]').last().click()
    cy.get('[name="username"]').last().type('e2etest')
    cy.get('[name="email"]').last().type('nusszopf.e2e.test@mailto.plus')
    cy.get('[name="password"]').last().type('asdf1234A!')
    cy.get('[name="privacy"]').last().click({ force: true })
    cy.get('[type="submit"]').last().click()
    cy.location().should(location => {
      expect(location.href).to.equal('https://web.dev.nusszopf.org/user/projects')
    })
  })

  it('User can logout', () => {
    cy.get('[data-test="btn_burger_nav-header"]').click()
    cy.get('[data-test="btn_logout_nav-header"]').click()
    cy.location().should(location => {
      expect(location.href).to.equal('https://web.dev.nusszopf.org/')
    })
  })

  it('User can login', () => {
    cy.get('[data-test="btn_burger_nav-header"]').click()
    cy.get('[data-test="btn_login_nav-header"]').click()
    cy.get('[name="emailOrName"]').first().type('e2etest')
    cy.get('[name="password"]').first().type('asdf1234A!')
    cy.get('[type="submit"]').first().click()
    Cypress.Cookies.defaults({
      preserve: ['a0:state', 'a0:session'],
    })
    cy.location().should(location => {
      expect(location.href).to.equal('https://web.dev.nusszopf.org/user/projects')
    })
  })
})
