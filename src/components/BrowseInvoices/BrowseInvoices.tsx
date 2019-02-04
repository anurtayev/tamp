import React from 'react'
import './BrowseInvoices.css'
import { EInvoice, DeleteInvoiceAction } from '../../model'
import Invoice from './Invoice'
import { connect } from 'react-redux'
import { EState, deleteInvoice } from '../../model'
import { ActionCreator } from 'redux'

const Browser = (props: {
  invoices: EInvoice[]
  deleteInvoice: ActionCreator<DeleteInvoiceAction>
}) => {
  return (
    <div className="BrowseInvoices">
      {props.invoices.length > 0
        ? props.invoices.map((invoice: EInvoice) => (
            <Invoice key={invoice.id} {...invoice} />
          ))
        : null}
    </div>
  )
}

export default connect(
  (state: EState) => ({
    invoices: state.invoices.filter(invoice =>
      state.filter.invoice_number
        ? invoice.invoice_number.includes(state.filter.invoice_number)
        : invoice
    )
  }),
  { deleteInvoice }
)(Browser)
