import React from "react";


const StepperFooter = ({
	isPrevBtn,
	previousStepHandler,
	isLastStep,
	nextStepHandler,
	submitHandler,
	stepperContent,
	currentTabIndex,
}) => {
	const submitCurrentStep = async () => {
		await stepperContent[currentTabIndex].clicked();
		nextStepHandler();
	};

	return (
        <div className="container">
            <div
                className="stepper-footer"
                style={{ justifyContent: isPrevBtn ? 'space-between' : 'flex-end' }}
            >
                {isPrevBtn && (
                    <button className="btn btn-primary" onClick={previousStepHandler}>
                        {/* Back to {stepperContent[currentTabIndex - 1].label} */}
                        Back
                    </button>
                )}
                <button
                    className="btn btn-primary"
                    onClick={
                        isLastStep
                            ? submitHandler
                            : stepperContent[currentTabIndex].clicked
                            ? submitCurrentStep
                            : nextStepHandler
                    }
                    disabled={
                        (isLastStep
                            ? stepperContent.some((el) => !el.isComplete)
                            : !stepperContent[currentTabIndex].isComplete) ||
                        stepperContent[currentTabIndex].isLoading
                    }
                >
                    {/* {isLastStep ? 'Submit' : `Continue to ${stepperContent[currentTabIndex + 1].label}`} */}
                    {isLastStep ? 'Submit' : 'Continue'}
                </button>
            </div>
        </div>
	);
};

export default StepperFooter;
