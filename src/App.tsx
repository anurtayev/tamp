import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Amplify from 'aws-amplify'
import aws_exports from './aws-exports'
// @ts-ignore: no @types yet
import { withAuthenticator } from 'aws-amplify-react'
import BrowseInvoices from './components/BrowseInvoices'
import FilterForm from './components/FilterForm'
import NavBar from './components/NavBar'
import EditInvoice from './components/EditInvoice'

Amplify.configure(aws_exports)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={FilterForm} />
          <Route path="/BrowseInvoices" render={() => <BrowseInvoices />} />
          <Route
            path="/EditInvoice/:id"
            render={({ match }: { match: { params: { id: string } } }) => {
              return <EditInvoice id={match.params.id} />
            }}
          />
        </div>
      </Router>
    )
  }
}

export default withAuthenticator(App, false)
