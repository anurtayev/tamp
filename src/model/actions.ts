import { EInvoice } from './entities'
import { AnyAction, Action, ActionCreator } from 'redux'

export const SET_FILTER = 'SET_FILTER'
export const CREATE_INVOICE = 'CREATE_INVOICE'
export const DELETE_INVOICE = 'DELETE_INVOICE'
export const UPDATE_INVOICE = 'UPDATE_INVOICE'

export interface FilterAction extends Action {
  filter: Partial<EInvoice>
}

export interface CreateInvoiceAction extends Action {
  invoice: Partial<EInvoice>
}

export interface DeleteInvoiceAction extends Action {
  id: number
}

export interface UpdateInvoiceAction extends Action {
  invoice: EInvoice
}

export const setFilter: ActionCreator<FilterAction> = (
  filter: Partial<EInvoice>
): FilterAction => ({
  type: SET_FILTER,
  filter
})

export const createInvoice: ActionCreator<CreateInvoiceAction> = (
  invoice: Partial<EInvoice>
): CreateInvoiceAction => ({
  type: CREATE_INVOICE,
  invoice
})

export const deleteInvoice: ActionCreator<DeleteInvoiceAction> = (
  id: number
): DeleteInvoiceAction => ({
  type: DELETE_INVOICE,
  id
})

export const updateInvoice: ActionCreator<UpdateInvoiceAction> = (
  invoice: EInvoice
): UpdateInvoiceAction => ({
  type: UPDATE_INVOICE,
  invoice
})
