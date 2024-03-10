import React, { useState } from 'react';
import './stepper.css';

const Stepper = ({ list }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const stepsCount = list.length;
  const steps = [];

  for (let i = 0; i < stepsCount; i++) {
    steps.push(
      <div onClick={() => setCurrentStep(i)} className={`steps ${currentStep >= i ? "active" : "" }`} key={i}>
        {i + 1}
      </div>
    );
  }

  const progressLineWidth = (100 / (list.length - 1)) * currentStep;

  const onPrev = () => {
    if(currentStep !== 0) {
      setCurrentStep(currentStep - 1);
    }
  }

  const onNext = () => {
    if(currentStep !== list.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  // const Ele = list(currentStep);

  return (
    <section className='stepper'>
      <div className="steps-container">
        <div className="steps-wrapper">
          {steps}
          <div className="progress-line" style={{width: `${progressLineWidth}%`}}></div>
        </div>
      </div>
      <div>{React.cloneElement(list[currentStep], {onPrev, onNext})}</div>

    </section>
  );
};
export default Stepper;

// const Stepper = (props) => {
//   const { stepperValue = [] } = props;
//   console.log(stepperValue, "stepperValue");
//   return (
//     <div className="flex justify-between max-w-[1440px] h-[100vh] m-auto items-center text-center">
//       {stepperValue.map((val, i) => {
//         return (
//           <div className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 last:after:h-0 last:after:border-b-0 last:after:mx-0 last:w-0 last:after:w-0">
//             <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-black-200 dark:after:text-black-500 last:after:content-[''] last:after:mx-0">
//               <span class="me-2">{i}</span>
//               {val}<span class="hidden sm:inline-flex sm:ms-2">Info</span>
//             </span>
//           </div>
//         );
//       })}
//     </div>
//   );
// };
// export default Stepper;
