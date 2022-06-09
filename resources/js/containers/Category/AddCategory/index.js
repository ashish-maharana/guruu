/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { name, reducer, actions } from "../Category/slice";
import validate from "./validate";
import { useInjectReducer, useInjectSaga } from "redux-injectors";
import messages from "./messages";
import saga from "../Category/saga";
import Layout from "../../Layout";
import makeSelectLogin from "../../Login/selectors";
import { makeSelectErrors } from "../Category/selectors";
import { useCategory } from "../Category/index";

export default function AddCategory() {
  const dispatch = useDispatch();
  useInjectReducer({ key: name, reducer });
  useInjectSaga({ key: name, saga });
  const customErrors = useSelector(makeSelectErrors());
  const categoryData = useCategory();

  return (
    <Layout>
      <Formik
        initialValues={{
          name: "",
          parent_id: "",
        }}
        onSubmit={(values) => {
          dispatch(
            actions.saveCategory({
              ...values,
            })
          );
        }}
        validator={validate}
      >
        {(formik) => {
          const {
            errors,
            touched,
            isValid,
            dirty,
            values,
            setFieldValue,
            handleChange,
            setFieldTouched,
            setFieldError,
          } = formik;
          useEffect(() => {
            if (customErrors) {
              for (const property in customErrors) {
                setFieldTouched(property, true, false);
                setFieldError(property, `${customErrors[property]}`);
              }
            }
          }, [customErrors]);

          const handleSelectChange = (e) => {
            handleChange(e);
            setFieldValue("parent_id", e.target.value);
          };

          return (
            <div className="py-5 inner-pg">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-xl-6">
                    <div className="row justify-content-center">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="p-5">
                            <div className="text-center"></div>
                            <Form className="card">
                              <div className="card-body">
                                <h4 class="card-title mb-4">
                                  <FormattedMessage {...messages.header} />
                                </h4>
                                <div className="row">
                                  <div className="form-group col-lg-12">
                                    <label htmlFor="email">
                                      Category Name
                                      <span className={"text-danger"}>*</span>
                                    </label>
                                    <Field
                                      type="text"
                                      name="name"
                                      id="name"
                                      value={values.name}
                                      className={
                                        errors.name && touched.name
                                          ? "form-control form-control-user is-invalid"
                                          : "form-control form-control-user"
                                      }
                                    />
                                    <ErrorMessage
                                      name="name"
                                      component="span"
                                      className="invalid-feedback"
                                    />
                                  </div>

                                  <div className="form-group">
                                    <select
                                      id="parent_id"
                                      label={"Select Category"}
                                      name="parent_id"
                                      value={values.parent_id}
                                      onChange={handleSelectChange}
                                      className="form-control"
                                    >
                                      <option value={""} disabled>
                                        Choose...
                                      </option>
                                      {categoryData.data.map((q) => {
                                        return (
                                          <option key={q.id} value={q.id}>
                                            {q.name}
                                          </option>
                                        );
                                      })}
                                    </select>
                                  </div>

                                  <div className="col-md-12 text-end mt-5">
                                    <button
                                      type="submit"
                                      className={
                                        !(dirty && isValid)
                                          ? "btn btn-primary disabled-btn m-1"
                                          : "btn btn-primary m-1"
                                      }
                                      disabled={!(dirty && isValid)}
                                    >
                                      Add Category
                                    </button>
                                    <Link
                                      to="/"
                                      className="btn btn-secondary m-1"
                                    >
                                      Cancel
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </Form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </Formik>
    </Layout>
  );
}
