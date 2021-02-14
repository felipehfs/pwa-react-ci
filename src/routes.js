import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Artist from './screens/artist'
import Home from './screens/home'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/artists" component={Artist} />
      </Switch>
    </BrowserRouter>
  )
}
