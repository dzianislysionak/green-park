import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './components/header/header'
import About from './pages/about/about'
import Catalog from './pages/catalog/catalog'
import Contacts from './pages/contacts/contacts'
import Home from './pages/home/home'
import Admin from './pages/green-park-flowers/green-park-flowers'
import './App.css'

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/catalog' component={Catalog} />
      <Route path='/about' component={About} />
      <Route path='/contacts' component={Contacts} />
      <Route path='/green-park-flowers' component={Admin} />
    </Switch>
  </div>
)

export default App
