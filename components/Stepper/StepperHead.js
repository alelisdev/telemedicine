import React from "react";
import Step from "./Step";

const StepperHead = ({
	stepperContent,
	navigateToStepHandler,
	isRightToLeftLanguage,
	currentTabIndex,
}) => (
	<div
		className="stepper-head inline-stepper-head">
		{stepperContent.map((el, i) => (
			<Step
				key={i}
				index={i}
				navigateToStepHandler={navigateToStepHandler}
				isActive={i === currentTabIndex}
				isComplete={el.isComplete}
				isWarning={el.isWarning}
				isError={el.isError}
				isRightToLeftLanguage={isRightToLeftLanguage}
				indicator={i + 1}
				label={el.label}
			/>
		))}
	</div>
);

export default StepperHead;