import React from "react";
import ReactDOM from "react-dom";
import Pig from "pig-react";
import imageData from "./jsons/imageData.json";
import imageDataGrouped from "./jsons/imageData-grouped.json";
import SelectablePig from "./components/SelectablePig";
import DeletablePig from "./components/DeletablePig.js";
import UpdatablePig from "./components/UpdatablePig";
import IncompleteGroupedPig from "./components/IncompleteGroupedPig";
import IncompletePig from "./components/IncompletePig";

import "semantic-ui-css/semantic.min.css";
import "./base.css";
import Overlay from "./components/Overlay";

ReactDOM.render(
  <main className="main">
    {<IncompleteGroupedPig />}
    {/* <Pig
        imageData={imageDataGrouped}
        groupByDate
        gridGap={8}
        bgColor="hsla(211, 50%, 98%)"
        groupGapLg={50}
        groupGapSm={20}
        selectable={true}
        breakpoint={800}
        scaleOfImages={3}
        overlay={Overlay}
      />
      */}
  </main>,
  document.getElementById("root")
);
