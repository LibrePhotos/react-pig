import React, { Component } from "react";
import Pig from "pig-react";
import imageDataGrouped from "../jsons/imageData-grouped-notLoaded.json";

export default class IncompleteGroupedPig extends Component {
  constructor(props) {
    super(props);
    const imageDateGroupedWithTemp = imageDataGrouped.map((g) => {
      if (g.incomplete) {
        g.items = [];
        for (var i = 0; i < g.numberOfItems; i++) {
          g.items.push({ id: i, aspectRatio: 1, isTemp: true });
        }
      }
      return {
        ...g,
      };
    });
    this.state = {
      imageDataGrouped: imageDateGroupedWithTemp,
    };
  }

  //To-Do: fake loading of images by adding a delay and adding the pictures from imageData-grouped.json

  render() {
    return (
      <Pig
        imageData={this.state.imageDataGrouped}
        groupByDate={true}
        updateGroups={(visibleGroups) => {
          console.log(visibleGroups);
        }}
        gridGap={8}
        bgColor="hsla(211, 50%, 98%)"
        groupGapLg={50}
        groupGapSm={20}
        breakpoint={800}
      />
    );
  }
}
