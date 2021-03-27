<p align="center">
  <a href="https://nusszopf.org">
    <img src="../../docs/1200x630.png" alt="Nusszopf logo" height="165">
  </a>
</p>

# Nusszopf – E2E Tests

Test environment to ensure that the main functionality works.
The tests are carried out with the help of the Cypress framework. All necessary information about how the testing works, can be found in the [Cypress Documentation](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell).

## Scripts

### `yarn open`

Starts the Cypress Test Runner in watch mode and opens the Cypress Test Interface.

### `yarn start`

Starts Cypress in continuous integration mode, which will run all tests and exit.

## Automated Tests

### Auth0

- [x] Login
- [x] Registration

### User (anonym)

- [ ] landingpage call-to-actions
- [ ] Search projects
- [ ] Contact project-team

### User (logged in)

- [ ] CRUD projects
- [ ] CRUD requests
- [ ] Read/Remove account

## Manual Tests

- Update/Read account settings
- Newsletter
- E-Mails
- Responsive UI
- Forgot Password
- Change Password
