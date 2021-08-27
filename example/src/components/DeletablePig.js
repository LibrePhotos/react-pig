import React, { Component } from "react";
import Pig from "pig-react";
import Overlay from "./Overlay";


export default class DeletablePig extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedItem:[],
            imageData:this.props.imageData
        }
        this.handleDelete = this.handleDelete.bind(this)
    }
    
    handleDelete() {
        // simulate deleting top 2 items
        console.log(this.state.imageData)
        let newImageData = this.state.imageData.filter((_, i) => i > 1)
        this.setState({imageData:newImageData})
    }
       
    render() {
        return (
        <div>
            <button onClick={this.handleDelete}> delete </button>
            <Pig
              imageData={this.state.imageData}
              gridGap={8}
              bgColor="hsla(211, 50%, 98%)"
              groupGapLg={50}
              groupGapSm={20}
              selectable={true}
              breakpoint={800}
              overlay={Overlay}
            />
        </div>
    )
    }
}
