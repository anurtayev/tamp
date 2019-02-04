import React from 'react'
import './EditInvoice.css'
import {
  EState,
  EInvoice,
  updateInvoice,
  UpdateInvoiceAction
} from '../../model'
import { Formik, Form, Field } from 'formik'
import { connect } from 'react-redux'
import { Route } from 'react-router'
import { AnyAction, Dispatch, bindActionCreators, ActionCreator } from 'redux'

const EditForm = (
  props: EInvoice & {
    updateInvoice: ActionCreator<UpdateInvoiceAction>
  }
) => {
  const { updateInvoice, ...invoice } = props

  return (
    <Route>
      {({ history }) => (
        <Formik
          initialValues={invoice}
          validate={values => {
            let errors: Partial<EInvoice> = {}
            if (!values.invoice_number) {
              errors.invoice_number = 'Required'
            }
            return errors
          }}
          onSubmit={(values, { setSubmitting }) => {
            props.updateInvoice(values)
            setSubmitting(false)
            history.push('/BrowseInvoices')
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
          }) => (
            <Form>
              <label htmlFor="invoice_number">Invoice number</label>
              <Field type="text" name="invoice_number" />
              <label htmlFor="amount">Amount</label>
              <Field type="text" name="amount" />
              <label htmlFor="bol_number">BOL number</label>
              <Field type="text" name="bol_number" />
              <label htmlFor="container_number">Container number</label>
              <Field type="text" name="container_number" />
              <label htmlFor="carrier_id">Carrier</label>
              <Field type="text" name="carrier_id" />
              <label htmlFor="plant_id">Plant</label>
              <Field type="text" name="plant_id" />
              <label htmlFor="internal_user_id">Internal User</label>
              <Field type="text" name="internal_user_id" />
              <label htmlFor="supplychain_id">Supply chain</label>
              <Field type="text" name="supplychain_id" />
              <label htmlFor="reason_id">Reason</label>
              <Field type="text" name="reason_id" />
              <label htmlFor="status_id">Status</label>
              <Field type="text" name="status_id" />
              <label htmlFor="modified_by">Modified by</label>
              <Field type="text" name="modified_by" />
              <label htmlFor="region_id">Region</label>
              <Field type="text" name="region_id" />
              <label htmlFor="ponumber">PO number</label>
              <Field type="text" name="ponumber" />
              <button type="submit" className="btn--blue">
                Save
              </button>
            </Form>
          )}
        </Formik>
      )}
    </Route>
  )
}

const EditInvoice = (props: any) => {
  return <EditForm {...props.invoice} updateInvoice={props.updateInvoice} />
}

export default connect(
  (state: EState, ownProps: { id: string }) => {
    const invoice: EInvoice | undefined = state.invoices.find(
      invoice => invoice.id === parseInt(ownProps.id, 10)
    )
    return { invoice }
  },
  { updateInvoice }
)(EditInvoice)
