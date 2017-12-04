import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'
import TradeHistory from './TradeHistory'

import NavBar from './NavBar'

const App = () => (
  <div>
    <header>
      {/* not 'exact' path so NavBar will show up on all paths with '/' */}
      <Route path="/" component={NavBar} />
    </header>

    <main>
      <Route exact path="/" component={Home} />
    </main>
  </div>
)

export default App
