import React from 'react'
import './NavBar.css'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { Auth } from 'aws-amplify'

const NavElements = (props: RouteComponentProps) => {
  return (
    <div className="NavBar">
      <button
        className="btn--blue btn--s NavBar__nav-btn"
        onClick={() => {
          props.history.push('/')
        }}
      >
        Filter
      </button>
      <button
        className="btn--blue btn--s NavBar__nav-btn"
        onClick={() => {
          props.history.push('/BrowseInvoices')
        }}
      >
        Browse
      </button>
      <button
        className="btn--red btn--s NavBar__nav-btn-right"
        onClick={() => {
          Auth.signOut().then(data => console.log(data))
        }}
      >
        Sign Out
      </button>
    </div>
  )
}

export default withRouter(NavElements)
