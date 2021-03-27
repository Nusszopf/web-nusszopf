context('Projects', () => {
  before(() => {
    cy.visit('/')
    cy.login()
  })

  beforeEach(() => {
    Cypress.Cookies.preserveOnce('a0:state', 'a0:session')
  })

  // current workaround: slate-editor hast to be edited first, else it would not work
  // https://github.com/ianstormtaylor/slate/issues/3476
  describe('[Create]', () => {
    it('User can create a project including requests', () => {
      cy.get('[data-test="route_create-project_projects-page"]').first().click()
      // Step 1
      cy.get('[data-test="input_project-description"]').type('Test Description')
      cy.get('[data-test="input_project-title"]').first().type('Test Title')
      cy.get('[data-test="input_project-goal"]').first().type('Test Goal')
      cy.get('[data-test="radio_flexible_project-period"]').first().click({ force: true })
      cy.get('[data-test="radio_remote_project-location"]').first().click({ force: true })
      cy.get('[data-test="btn_create-or-next_navigation"]').first().click()
      // Step 2
      cy.get('[data-test="input_project-team"]').first().type('Test Team')
      cy.get('[data-test="input_project-motto"]').first().type('Test Motto')
      cy.get('[data-test="btn_create-or-next_navigation"]').first().click()
      // Step 3
      cy.get('[data-test="btn_create_requests-step"]').first().click()
      cy.get('[data-test="input_request-description"]').first().type('Test Description')
      cy.get('[data-test="input_request-title"]').first().type('Test Title')
      cy.get('[data-test="select_request-category"]').first().select('companions')
      cy.get('[data-test="btn_create-or-save_edit-request-dialog"]').first().click()
      cy.get('[data-test="btn_create-or-next_navigation"]').first().click()
      // Step 4
      cy.get('[data-test="btn_create-or-next_navigation"]').first().click()
      // Expect
      cy.location().should(location => {
        expect(location.href).to.equal('https://web.dev.nusszopf.org/user/projects')
      })
      cy.get('[data-test="text_title_project-edit-card"]').should('have.text', 'Test Title')
      cy.get('[data-test="text_title_preview-request-card"]').should('have.text', 'Test Title')
      // todo: check search
    })
  })

  xdescribe('[Update]', () => {
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

  xdescribe('[Delete]', () => {
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
