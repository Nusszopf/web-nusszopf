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
      cy.get('[data-test="text_title_project-edit-card"]').first().should('have.text', 'Test Title')
      cy.get('[data-test="text_title_preview-request-card"]').first().should('have.text', 'Test Title')
    })

    it('User can find the new created project on the search page', () => {
      cy.visit('/search')
      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(2000)
      cy.get('[data-test="btn_search_search-input"]').click()
      cy.get('[data-test="route_hitcard"]')
        .first()
        .within(() => {
          cy.get('[data-test="route_title_hitcard"]').should('have.text', 'Test Title')
        })
    })
  })

  describe('[Update]', () => {
    it('User can update description and requests of a project', () => {
      cy.visit('/user/projects')
      cy.get('[data-test="route_edit-project_projects-page"]').first().click()
      // Update Description
      cy.get('[data-test="input_project-title"]').first().type(' Updated')
      cy.get('[data-test="btn_save_project-view"]').first().click()

      // Update Request
      cy.get('[data-test="select_view_edit-project-page"]').select('Gesuche')
      cy.get('[data-test="menu_edit-request-card"]')
        .first()
        .click()
        .within(cy.get('[data-test="menuitem-0"]').first().click({ force: true }))
      cy.get('[data-test="edit-request-dialog"]').within(cy.get('[data-test="input_request-title"]').type(' Updated'))
      cy.get('[data-test="btn_create-or-save_edit-request-dialog"]').click()

      // Expect
      cy.get('[data-test="btn_user-projects_nav-header"]').first().click()
      cy.get('[data-test="text_title_project-edit-card"]').first().should('have.text', 'Test Title Updated')
      cy.get('[data-test="text_title_preview-request-card"]').first().should('have.text', 'Test Title Updated')
    })

    it('User can find the updated project on the search page', () => {
      cy.visit('/search')
      cy.get('[data-test="route_hitcard"]')
        .first()
        .within(() => {
          cy.get('[data-test="route_title_hitcard"]').should('have.text', 'Test Update Title')
        })
    })
  })

  describe('[Delete]', () => {
    it('User can delete a request', () => {
      cy.visit('/user/projects')
      cy.get('[data-test="select_view_edit-project-page"]').select('Gesuche')
      cy.get('[data-test="menu_edit-request-card"]').first().click().within(cy.get('[role="menuitem"]').last().click())
      cy.get('[data-test="btn_user-projects_nav-header"]').first().click()
      cy.get('[data-test="text_title_preview-request-card"]').should('not.exist')
    })

    it('User can delete a project', () => {
      cy.visit('/user/projects')
      cy.get('[data-test="select_view_edit-project-page"]').select('Einstellungen')
      cy.get('[data-test="btn_delete_settings-view"]').click()
      cy.on('window:confirm', () => true)
      cy.get('[data-test="route_edit-project_projects-page"]').should('not.exist')
    })

    it('User can not find the deleted project on the search page', () => {
      cy.visit('/search')
      cy.get('[data-test="input_search-input"]').type('Test Title Updated')
      cy.get('[data-test="btn_search_search-input"]').click()
      cy.get('[data-test="route_hitcard"]').should('not.exist')
    })
  })
})
