import StepWizard from "react-step-wizard";
import { useInjectReducer, useInjectSaga } from "redux-injectors";
import React, { Fragment, useState, useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, Modal } from "react-bootstrap";
import validate from "../validate";
import {
  aboutValidate,
  profileValidate,
  teachValidate,
  validateUpdatedPhoneNumber,
} from "../validate";
import { name, reducer, actions } from "../slice";
import { useDispatch, useSelector } from "react-redux";
import makeSelectSignup from "../selectors";
import makeSelectErrors from "../selectors";
import Layout from "../../Layout";
import saga from "../saga";
import history from "../../../utils/history";
import GoogleMap from "../maps";
import DropZoneEx from "../dropZone";
import Countdown, { zeroPad } from "react-countdown";
import { DatePickerField } from "../../../utils/HelperFormik";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { confirmAlert } from "react-confirm-alert";
import StepTwo from "./stepTwo";
import StepFourth from "./stepFour";
import StepFive from "./stepFive";

const TeacherRegistration = () => {
  // React Bootstrap Model
  const [showHide, setShowHide] = useState(true);

  const handleModalShowHide = () => {
    // this.setState({ showHide: !this.state.showHide })
    setShowHide(!showHide);
    history.push("/");
    setTimeout(() => location.reload(), 500);
  };

  const [state, updateState] = useState({
    form: {},
    demo: true, // uncomment to see more
  });

  const updateForm = (key, value) => {
    const { form } = state;

    form[key] = value;
    updateState({
      ...state,
      form,
    });
  };

  // Do something on step change
  const onStepChange = (stats) => {};

  const setInstance = (SW) =>
    updateState({
      ...state,
      SW,
    });

  const { SW, demo } = state;
  const refModal = useRef();
  return (
    <Layout>
      <div className="container">
        <Modal
          show={showHide}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          dialogClassName="modal-style1"
        >
          <Modal.Header
            closeButton
            onClick={handleModalShowHide}
          ></Modal.Header>
          <Modal.Body>
            <div className={"jumbotron"}>
              <div className="row">
                <div className="col-12 col-sm-12 rsw-wrapper">
                  <StepWizard
                    onStepChange={onStepChange}
                    isHashEnabled
                    transitions={state.transitions} // comment out for default transitions
                    instance={setInstance}
                  >
                    <StepTwo form={state.form} />
                    <StepFourth form={state.form} />
                    <StepFive hashKey={"TheEnd!"} />
                  </StepWizard>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </Layout>
  );
};

export default TeacherRegistration;
