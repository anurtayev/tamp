import React, { Component } from 'react'
import './Invoice.css'
import { EInvoice } from '../../../model'
import TextLine from './TextLine'
import { Route } from 'react-router-dom'

interface InvoiceState {
  expanded: boolean
}

export default class extends Component<EInvoice, InvoiceState> {
  state = {
    expanded: false
  }

  setExpanded = () => {
    this.setState(state => ({
      expanded: !state.expanded
    }))
  }

  render() {
    return (
      <Route>
        {({ history }) => (
          <div className="Invoice brdr--dark-gray">
            <div className="Invoice__header">
              <TextLine
                text={this.props.invoice_number}
                caption="Invoice number"
              />
              <TextLine text={this.props.amount} caption="Amount" />
              <TextLine text={this.props.bol_number} caption="BOL" />
              <TextLine
                text={this.props.container_number}
                caption="Container"
              />
              <TextLine text={this.props.ship_date} caption="Ship date" />
              <TextLine text={this.props.submit_date} caption="Submit date" />
              <TextLine text={this.props.rate} caption="Rate" />
            </div>

            <div className="Invoice__action-bar">
              <button className="btn" onClick={this.setExpanded}>
                Expand
              </button>
              <button
                className="btn"
                onClick={() => history.push(`/EditInvoice/${this.props.id}`)}
              >
                Edit
              </button>
            </div>
            {this.state.expanded && (
              <div className="Invoice__detail">
                <TextLine text={this.props.delaytime} caption="Delay time" />
                <TextLine text={this.props.carrier_id} caption="Carrier" />
                <TextLine text={this.props.plant_id} caption="Plant" />
                <TextLine
                  text={this.props.internal_user_id}
                  caption="Internal user"
                />
                <TextLine text={this.props.currency_id} caption="Currency" />
                <TextLine
                  text={this.props.supplychain_id}
                  caption="Supply chain"
                />
                <TextLine text={this.props.reason_id} caption="Reason" />
                <TextLine
                  text={this.props.payment_type_id}
                  caption="Payment type"
                />
                <TextLine text={this.props.status_id} caption="Status" />
                <TextLine
                  text={this.props.modified_ts}
                  caption="Modified timestamp"
                />
                <TextLine text={this.props.modified_by} caption="Modified by" />
                <TextLine text={this.props.region_id} caption="Region" />
                <TextLine text={this.props.notes} caption="Notes" />
                <TextLine
                  text={this.props.carriernumbers_id}
                  caption="Carrier numbers"
                />
                <TextLine text={this.props.ponumber} caption="Purchase Order" />
                <TextLine
                  text={this.props.additionaldoc_num}
                  caption="Additional document"
                />
                <TextLine text={this.props.ers_member} caption="ERS number" />
                <TextLine text={this.props.line_item} caption="Line item" />
                <TextLine text={this.props.flagged} caption="Flagged" />
              </div>
            )}
          </div>
        )}
      </Route>
    )
  }
}
