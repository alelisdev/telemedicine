import React, { useState, Fragment } from "react";
import StepperHead from "./StepperHead";
import StepperFooter from "./StepperFooter";

const Stepper = ({ isRightToLeftLanguage, stepperContent, submitStepper }) => {
	const [currentTabIndex, setCurrentTabIndex] = useState(0),
		isLastStep = currentTabIndex === stepperContent.length - 1,
		isPrevBtn = currentTabIndex !== 0;

	const navigateToStepHandler = (index) => {
		if (index !== currentTabIndex) {
			setCurrentTabIndex(index);
		}
	};

	const nextStepHandler = () => {
		setCurrentTabIndex((prev) => {
			if (prev !== stepperContent.length - 1) {
				return prev + 1;
			}
		});
	};

	const previousStepHandler = () => {
		setCurrentTabIndex((prev) => prev - 1);
	};

	const submitHandler = () => {
		submitStepper();
	};

	return (
		<div className="stepper-wrapper">
			<div style={{ display: 'block' }}>
				<StepperHead
					stepperContent={stepperContent}
					navigateToStepHandler={navigateToStepHandler}
					currentTabIndex={currentTabIndex}
					isRightToLeftLanguage={isRightToLeftLanguage}
				/>
				<div className="stepper-body">
					{stepperContent.map((el, i) => (
						<Fragment key={i}>{i === currentTabIndex && el.content}</Fragment>
					))}
				</div>
			</div>
			<StepperFooter
				isPrevBtn={isPrevBtn}
				previousStepHandler={previousStepHandler}
				isLastStep={isLastStep}
				nextStepHandler={nextStepHandler}
				submitHandler={submitHandler}
				stepperContent={stepperContent}
				currentTabIndex={currentTabIndex}
			/>
		</div>
	);
};

export default Stepper;