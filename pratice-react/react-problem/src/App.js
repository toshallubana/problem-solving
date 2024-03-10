import React, { useState } from "react";
import "./App.css";
// import InfiniteScroll from "./InfiniteScroll/InfiniteScroll";
// import CustomCase from "./customCaseComponent/CustomCase";
// import CustomSwitch from "./customCaseComponent/CustomSwitch";
// import DefaultCase from "./customCaseComponent/DefaultCase";

import { FeatureFlagProvider, FeatureFlag } from "./FeatureFlag/FeatureFlag";
import UseWhyDidYouUpdate from "./UseWhyDidYouUpdate";
import Stepper from "./Stepper";

// const Example = () => {
//   return (
//     <h1>
//       <Feature feature="isGooglePayEnable" value={true}>
//         Google
//       </Feature>
//       <Feature feature="isAmazonPayEnable" value={false}>
//         Apple
//       </Feature>
//     </h1>
//   );
// };

// const Feature = ({ feature, children, value }) => {
//   const { features } = React.useContext(FeatureFlag);
//   return features[feature] ? children : null;
// };

// const ExampleUpdate = (props) => {
//   UseWhyDidYouUpdate("Example", props);
//   return <div>{props.count}</div>;
// };

function App() {
  // const [count, setCount] = useState(0);
  // const onFn = () => {

  // }

  const Example1 = ({ onPrev, onNext }) => {
    return (
      <>
        <h1>hello 1</h1>
        <div>
          <button onClick={onPrev}>Prev</button>
          <button onClick={onNext}>next</button>
        </div>
      </>
    );
  };

  const Example2 = ({ onPrev, onNext }) => {
    return (
      <>
        <h1>hello 2</h1>
        <div>
          <button onClick={onPrev}>Prev</button>
          <button onClick={onNext}>next</button>
        </div>
      </>
    );
  };
  const Example3 = ({ onPrev, onNext }) => {
    return (
      <>
        <h1>hello 3</h1>
        <div>
          <button onClick={onPrev}>Prev</button>
          <button onClick={onNext}>next</button>
        </div>
      </>
    );
  };

  const Example4 = ({ onPrev, onNext }) => {
    return (
      <>
        <h1>hello 3</h1>
        <div>
          <button onClick={onPrev}>Prev</button>
          <button onClick={onNext}>next</button>
        </div>
      </>
    );
  };

  const list = [<Example1 />, <Example2 />, <Example3 />, <Example4 />];
  return (
    // <>
    //   <CustomSwitch value="100">
    //     <CustomCase value={(e) => e > 10}>Hello 10</CustomCase>
    //     <CustomCase value="20">Hello 20</CustomCase>
    //     <CustomCase value="30">Hello 30</CustomCase>
    //     <CustomCase value="40">Hello 40</CustomCase>
    //     <DefaultCase>Hello Nothing</DefaultCase>
    //   </CustomSwitch>
    // </>

    // <InfiniteScroll />

    // <FeatureFlagProvider>
    //   <Example />
    // </FeatureFlagProvider>
    // <>
    //   <button onClick={() => setCount(count + 1)}>Click me</button>
    //   <ExampleUpdate onFn={onFn}/>
    // </>

    <>
      <Stepper list={list} />
    </>
  );
}

export default App;
