import StepWizard from "react-step-wizard";
import React, { Fragment, useState, useEffect, useRef, useMemo } from "react";
import { Button, Modal } from "react-bootstrap";
import Layout from "../Layout";
import history from "../../utils/history";
import "react-datepicker/dist/react-datepicker.css";
import StepOne from "./StudentRegistration/stepOne";
import StepTwo from "./StudentRegistration/stepTwo";
import StepFourth from "./StudentRegistration/stepFour";
import StepFive from "./StudentRegistration/stepFive";
import StepSix from "./StudentRegistration/stepSix";

const StudentRegistration = () => {
  // React Bootstrap Model
  const [showHide, setShowHide] = useState(true);

  const handleModalShowHide = () => {
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
                    <StepOne hashKey={"FirstStep"} update={updateForm} />
                    <StepTwo form={state.form} />
                    <StepFourth form={state.form} />
                    <StepFive hashKey={"TheEnd!"} />
                    <StepSix form={state.form} />
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

export default StudentRegistration;
