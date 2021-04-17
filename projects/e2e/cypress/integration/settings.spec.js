xcontext('Settings', () => {
  before(() => {
    cy.visit('/')
    cy.login()
  })

  beforeEach(() => {
    Cypress.Cookies.preserveOnce('a0:state', 'a0:session')
    cy.visit('/user/profile')
  })

  it('User can see account information', () => {
    cy.get('[data-test="username_avatar"]').should('have.text', 'e2etest')
  })

  it('User can delete account', () => {
    cy.get('[data-test="btn_delete-account_settings-page"]').click()
    cy.on('window:confirm', () => true)
    cy.location().should(location => {
      expect(location.href).to.equal('https://web.dev.nusszopf.org/')
    })
  })
})
