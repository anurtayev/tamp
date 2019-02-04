import {
  createInvoice,
  deleteInvoice,
  updateInvoice,
  setFilter
} from './actions'
import { store } from './store'

console.log(store.getState())
const unsubscribe = store.subscribe(() => console.log(store.getState()))

store.dispatch(setFilter({ invoice_number: '561' }))
store.dispatch(createInvoice({ invoice_number: '56asdf', amount: 3.3 }))

unsubscribe()
