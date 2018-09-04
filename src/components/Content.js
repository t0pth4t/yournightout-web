import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Info from './Info'
import Wizard from './Wizard'

const Content = () => {
  return (
    <Switch>
    <Route exact path="/" component={Home} />
      <Route path="/info" component={Info} />
      <Route path="/wizard" component={Wizard} />
    </Switch>
  )
}

export default Content
