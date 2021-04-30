export default context('Settings', () => {
  it('User can see account information', () => {
    cy.visit('/user/profile')
    cy.get('[data-test="username_avatar"]').should('have.text', 'e2etest')
  })

  it('User can delete account', () => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000)
    cy.get('[data-test="btn_delete-account_settings-page"]').click()
    cy.on('window:confirm', () => true)
    cy.location().should(location => {
      expect(location.href).to.equal('https://web.dev.nusszopf.org/')
    })
  })
})
