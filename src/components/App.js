import React from "react"
import { Route, Link } from "react-router-dom"
import Home from "./Home"
import TradeHistory from "./TradeHistory"

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/tradehistory">Trade View</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/tradehistory" component={TradeHistory} />
    </main>
  </div>
)

export default App
