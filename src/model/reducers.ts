import { combineReducers } from 'redux'
import {
  SET_FILTER,
  CREATE_INVOICE,
  UPDATE_INVOICE,
  DELETE_INVOICE,
  FilterAction
} from './actions'
import { EInvoice } from '.'
import { AnyAction, Action } from 'redux'

function filter(
  state: Partial<EInvoice> = {},
  action: FilterAction
): Partial<EInvoice> {
  switch (action.type) {
    case SET_FILTER:
      return action.filter
    default:
      return state
  }
}

function invoices(state: EInvoice[] = [], action: AnyAction): EInvoice[] {
  switch (action.type) {
    case CREATE_INVOICE:
      return [...state, action.invoice]
    case UPDATE_INVOICE:
      return state.map(invoice =>
        invoice.id === action.invoice.id ? action.invoice : invoice
      )
    default:
      return state
  }
}

const feaReducers = combineReducers({
  filter,
  invoices
})

export default feaReducers
