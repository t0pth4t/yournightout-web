import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Info from './Info'
import When from './WizardSteps/When';

const Router = () => {
  return (
    <Switch>
    <Route exact path="/" component={Home} />
      <Route path="/info" component={Info} />
      <Route path="/when" component={When} />
    </Switch>
  )
}

export default Router
