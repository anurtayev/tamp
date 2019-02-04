import { createStore } from 'redux'
import feaReducers from './reducers'
import { EInvoice } from '.'
import mockData from './mock_data.json'

export type EState = {
  filter: Partial<EInvoice>
  invoices: EInvoice[]
}

const initialState: EState = { filter: {}, invoices: mockData }

export const store = createStore(feaReducers, initialState)
