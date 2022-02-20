import React, { Component } from "react";
import { Icon } from "semantic-ui-react";

export default class BottomLeftOverlay extends Component {
  render() {
    console.log(this.props.item.video);
    return <div>{this.props.item.video && <Icon name="play" inverted />}</div>;
  }
}
