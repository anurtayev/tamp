export type Nullable<T> = { [P in keyof T]: T[P] | null }

export interface EInvoice {
  id: number
  invoice_number: string
  bol_number?: string
  container_number?: string
  ship_date?: string
  submit_date?: string
  rate?: number
  delaytime?: number
  amount: number
  carrier_id?: number
  plant_id?: number
  internal_user_id?: number
  currency_id?: number
  supplychain_id?: number
  reason_id?: number
  payment_type_id?: number
  status_id?: number
  modified_ts?: string
  modified_by?: string
  region_id?: number
  notes?: string
  carriernumbers_id?: number
  ponumber?: string
  additionaldoc_num?: string
  ers_member?: number
  line_item?: string
  flagged?: number
}
