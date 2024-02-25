import React from "react";
import "./App.css";
// import InfiniteScroll from "./InfiniteScroll/InfiniteScroll";
// import CustomCase from "./customCaseComponent/CustomCase";
// import CustomSwitch from "./customCaseComponent/CustomSwitch";
// import DefaultCase from "./customCaseComponent/DefaultCase";

import { FeatureFlagProvider, FeatureFlag } from './FeatureFlag/FeatureFlag';

const Example = () => {
  return <h1>
    <Feature feature="isGooglePayEnable" value={true}>Google</Feature>
    <Feature feature="isAmazonPayEnable" value={false}>Apple</Feature>
  </h1>
}

const Feature = ({feature, children, value}) => {
  const { features } = React.useContext(FeatureFlag);
  return features[feature] ? children : null;
}

function App() {
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

    <FeatureFlagProvider>
      <Example />
    </FeatureFlagProvider>
  );
}

export default App;
