import React, { Component } from "react";
import { Icon } from "semantic-ui-react";

export default class Overlay extends Component {
    render() {
        return (
            <span>
                { this.props.item.favorited && <Icon name="star" color={"yellow"} /> }
            </span>
        );
    }
}