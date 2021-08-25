import React from "react";
import ReactDOM from "react-dom";
import Pig from "pig-react";
import imageData from "./imageData.json";
import SelectablePig from "./SelectablePig";
import DeletablePig from "./DeletablePig.js";

import 'semantic-ui-css/semantic.min.css';
import "./base.css";

ReactDOM.render(
  <main className="main">
    {/*
      <DeletablePig
        imageData={imageData}
      />
      */
    }
    { <Pig
      imageData={imageData}
      gridGap={8}
      bgColor="hsla(211, 50%, 98%)"
      groupGapLg={50}
      groupGapSm={20}
      selectable={true}
      breakpoint={800}
      scaleOfImages={3}
    /> } 
  </main>,
  document.getElementById("root")
);
