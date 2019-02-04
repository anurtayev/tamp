import React, { useState } from 'react'
import './FilterForm.css'
import {
  EState,
  EInvoice,
  Nullable,
  FilterAction,
  setFilter
} from '../../model'
import { Formik, Form, Field } from 'formik'
import { Route } from 'react-router-dom'
import { ActionCreator } from 'redux'
import { connect } from 'react-redux'

const FilterForm = (props: {
  filter: Partial<EInvoice>
  setFilter: ActionCreator<FilterAction>
}) => (
  <div className="FilterForm">
    <Route>
      {({ history }) => (
        <Formik
          initialValues={props.filter}
          validate={values => {
            let errors: Partial<EInvoice> = {}
            if (!values.invoice_number) {
              errors.invoice_number = 'Required'
            }
            return errors
          }}
          onSubmit={(values, { setSubmitting }) => {
            props.setFilter(values)
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
            <Form className="FilterForm__form">
              <p>Enter filter values</p>
              <label htmlFor="invoice_number">
                Invoice number
                {errors.invoice_number && (
                  <span>
                    {' '}
                    <mark id="FilterForm__form-invoice_number">
                      {errors.invoice_number}
                    </mark>
                  </span>
                )}
              </label>
              <Field type="text" name="invoice_number" />
              <label htmlFor="bol_number">BOL number</label>
              <Field type="text" name="bol_number" />
              <label htmlFor="container_number">Container number</label>
              <Field type="text" name="container_number" />
              <label htmlFor="carrier_id">Carrier</label>
              <Field type="text" name="carrier_id" />
              <label htmlFor="plant_id">Plant</label>
              <Field type="text" name="plant_id" />
              <label htmlFor="status_id">Status</label>
              <Field type="text" name="status_id" />
              <label htmlFor="modified_by">Modified by</label>
              <Field type="text" name="modified_by" />
              <label htmlFor="region_id">Region</label>
              <Field type="text" name="region_id" />
              <label htmlFor="ponumber">PO number</label>
              <Field type="text" name="ponumber" />
              <button type="submit" className="btn--blue">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      )}
    </Route>
  </div>
)

const emptyFilter = (): Partial<Nullable<EInvoice>> => ({
  invoice_number: null,
  bol_number: null,
  container_number: null,
  carrier_id: null,
  plant_id: null,
  internal_user_id: null,
  supplychain_id: null,
  reason_id: null,
  status_id: null,
  modified_by: null,
  region_id: null,
  ponumber: null
})

const initialFilter = (filter: Partial<EInvoice>): Partial<EInvoice> => ({
  ...emptyFilter,
  ...filter
})

export default connect(
  (state: EState) => ({ filter: state.filter }),
  { setFilter }
)(FilterForm)
