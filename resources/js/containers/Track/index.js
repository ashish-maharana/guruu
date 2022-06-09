import React, { useState, useEffect, useRef } from "react";
import StepWizard from "react-step-wizard";
import StepOne from "./TrackRegisteration/stepOne";
import StepTwo from "./TrackRegisteration/stepTwo";
import StepThree from "./TrackRegisteration/stepThree";
import StepFour from "./TrackRegisteration/stepFour";

const Track = () => {
    const [state, updateState] = useState({
        form: {},
        demo: true,
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

    const setInstance = SW => 
        updateState({
            ...state,
            SW,
        });

    const { SW, demo } = state;
    const refModal = useRef();
    return (
        <div className='container'>
            <div className={'jumbotron'}>
                <div className='row'>
                    <div className="col-12 col-sm-12 rsw-wrapper">
                        <StepWizard
                            onStepChange={onStepChange}
                            isHashEnabled
                            transitions={state.transitions} 
                            instance={setInstance}
                        >
                            <StepOne hashKey={'FirstStep'} update={updateForm} />
                            <StepTwo form={state.form} />
                            <StepThree form={state.form} />
                            <StepFour hashKey={'TheEnd!'} />
                        </StepWizard>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Track;

