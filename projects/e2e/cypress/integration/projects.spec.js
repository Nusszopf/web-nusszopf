context('Projects', () => {
  before(() => {
    cy.visit('/')
    cy.login()
  })

  beforeEach(() => {
    Cypress.Cookies.preserveOnce('a0:state', 'a0:session')
  })

  describe('[Create]', () => {
    it('User can create a project including requests', () => {
      // check user/projects
      // check search
      expect(true).to.equal(false)
    })
  })

  describe('[Update]', () => {
    it('User can update a request', () => {
      // check user/projects
      // check search
      expect(true).to.equal(false)
    })

    it('User can update project description', () => {
      // check user/projects
      // check search
      expect(true).to.equal(false)
    })
  })

  describe('[Delete]', () => {
    it('User can delete a request', () => {
      // check user/projects
      // check search
      expect(true).to.equal(false)
    })

    it('User can delete a project', () => {
      // check user/projects
      // check search
      expect(true).to.equal(false)
    })
  })
})
