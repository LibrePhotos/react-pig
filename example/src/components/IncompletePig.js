import React, { Component } from "react";
import Pig from "pig-react";
import imageDataGrouped from "../jsons/imageData-grouped-notLoaded.json";

export default class IncompletePig extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageDataGrouped: imageDataGrouped,
    };
  } 

  //To-Do: fake loading of images by adding a delay and adding the pictures from imageData-grouped.json

  render() {
    return (
      <Pig
        imageData={this.state.imageDataGrouped}
        groupByDate={true}
        gridGap={8}
        bgColor="hsla(211, 50%, 98%)"
        groupGapLg={50}
        groupGapSm={20}
        breakpoint={800}
      />
    );
  }
}
