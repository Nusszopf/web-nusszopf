context('Auth0', () => {
  before(() => {
    cy.visit('/')
  })

  afterEach(() => {
    cy.logout()
  })

  // todo: FIX isTestUser in registration for staging

  xit('User can register', () => {
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

  xit('User can login', () => {
    cy.login()
    cy.location().should(location => {
      expect(location.href).to.equal('https://web.dev.nusszopf.org/user/projects')
    })
  })

  xit('User can request new password', () => {
    // manual test
    expect(true).to.equal(false)
  })

  xit('User can change password', () => {
    // manual test
    expect(true).to.equal(false)
  })
})
