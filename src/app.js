import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

import AppHandler from './components/templates/AppHandler'
import NoMatch from './components/pages/404'
import LandingPage from './components/pages/LandingPage'
import Page1 from './components/pages/Page1'
import Page2 from './components/pages/Page2'


render((
  <Router history={browserHistory}>
    <Route path="/" component={AppHandler}>
      
		<IndexRoute component={LandingPage} />
		<Route path="page1" component={Page1} />
		<Route path="page2" component={Page2} />

		<Route path="*" component={NoMatch}/>
      
    </Route>
  </Router>
), document.getElementById('app'))
