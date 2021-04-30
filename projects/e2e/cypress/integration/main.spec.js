Cypress.Cookies.defaults({
  preserve: ['a0:state', 'a0:session'],
})

import './_landingpage.spec'
import './_search.spec'
import './_auth.spec'
import './_projects.spec'
import './_settings.spec'
