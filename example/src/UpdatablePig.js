import React, { Component } from "react";
import Pig from "pig-react";
import imageDataGrouped from "./imageData-grouped.json";

export default class UpdatablePig extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageDataGrouped: imageDataGrouped,
      addedPicture: false
    };
  } 

  updateGroup = (groups) => {
      console.log(groups)
      if(groups.filter(group => group.date === "2 October 2017").length > 0 && !this.state.addedPicture) {
        this.setState({
          addedPicture: true
        }); 
        
        var dateGroup = imageDataGrouped.filter(group => group.date === "2 October 2017")[0];
        
        var newItems = [...dateGroup.items, {
          "id": Math.floor(Math.random() * 100000),
          "dominantColor": "#C7D7DD",
          "url": "https://cdn.arstechnica.net/wp-content/uploads/2021/08/8-18-2021_11-12-41_PM-ss0zzcf4-980x551.png",
          "location": "Istanbul - Turkey",
          "date": "2 October 2017",
          "birthTime": "2019-02-22T19:01:57.891Z",
          "aspectRatio": 1.5
        },
        {
          "id": "uvblvzgtaspfgmoledwn",
          "dominantColor": "#7E8A8E",
          "url": "http://res.cloudinary.com/dizrcuwkb/image/upload/h_{{HEIGHT}}/v1551095794/demo/uvblvzgtaspfgmoledwn.jpg",
          "location": "Istanbul - Turkey",
          "date": "2 October 2017",
          "birthTime": "2019-02-22T19:18:46.091Z",
          "aspectRatio": 1.5
      },
      {
          "id": "zwvykpffqkljr2lls4zi",
          "dominantColor": "#1B100C",
          "url": "http://res.cloudinary.com/dizrcuwkb/image/upload/h_{{HEIGHT}}/v1551095823/demo/zwvykpffqkljr2lls4zi.jpg",
          "location": "Istanbul - Turkey",
          "date": "2 October 2017",
          "birthTime": "2019-02-22T19:28:00.205Z",
          "aspectRatio": 0.667
      },
      {
          "id": "cciunirsimgvqd3vu1kz",
          "dominantColor": "#396499",
          "url": "http://res.cloudinary.com/dizrcuwkb/image/upload/h_{{HEIGHT}}/v1551095845/demo/cciunirsimgvqd3vu1kz.jpg",
          "location": "Istanbul - Turkey",
          "date": "2 October 2017",
          "birthTime": "2019-02-22T18:51:14.601Z",
          "aspectRatio": 0.667
      },
      {
          "id": "crljpqksj7aq5l6sge1i",
          "dominantColor": "#8D8E94",
          "url": "http://res.cloudinary.com/dizrcuwkb/image/upload/h_{{HEIGHT}}/v1551095865/demo/crljpqksj7aq5l6sge1i.jpg",
          "location": "Istanbul - Turkey",
          "date": "2 October 2017",
          "birthTime": "2019-02-22T19:36:14.968Z",
          "aspectRatio": 1.5
      },
      {
          "id": "rlfmjh6zcpqnfc2rzodc",
          "dominantColor": "#D4B8BD",
          "url": "http://res.cloudinary.com/dizrcuwkb/image/upload/h_{{HEIGHT}}/v1551095889/demo/rlfmjh6zcpqnfc2rzodc.jpg",
          "location": "Istanbul - Turkey",
          "date": "2 October 2017",
          "birthTime": "2019-02-22T19:03:01.149Z",
          "aspectRatio": 1.5
      },
      {
          "id": "zwh85bhdbww9nsjespco",
          "dominantColor": "#A3ADBF",
          "url": "http://res.cloudinary.com/dizrcuwkb/image/upload/h_{{HEIGHT}}/v1551095916/demo/zwh85bhdbww9nsjespco.jpg",
          "location": "Istanbul - Turkey",
          "date": "2 October 2017",
          "birthTime": "2019-02-23T02:26:30.287Z",
          "aspectRatio": 1.5
      },
      {
          "id": "zaqjw6jfhopwbm6oiugz",
          "dominantColor": "#D4D0CB",
          "url": "http://res.cloudinary.com/dizrcuwkb/image/upload/h_{{HEIGHT}}/v1551095936/demo/zaqjw6jfhopwbm6oiugz.jpg",
          "location": "Istanbul - Turkey",
          "date": "2 October 2017",
          "birthTime": "2019-02-23T02:35:13.224Z",
          "aspectRatio": 1.5
      },
      {
          "id": "rrgxxd1ujuv2oehaema8",
          "dominantColor": "#2F2C2A",
          "url": "http://res.cloudinary.com/dizrcuwkb/image/upload/h_{{HEIGHT}}/v1551095956/demo/rrgxxd1ujuv2oehaema8.jpg",
          "location": "Istanbul - Turkey",
          "date": "2 October 2017",
          "birthTime": "2019-02-22T18:57:54.243Z",
          "aspectRatio": 1.5
      },
      {
          "id": "i7ekqlpg7icuwhn8czuh",
          "dominantColor": "#D5E1E8",
          "url": "http://res.cloudinary.com/dizrcuwkb/image/upload/h_{{HEIGHT}}/v1551095997/demo/i7ekqlpg7icuwhn8czuh.jpg",
          "location": "Istanbul - Turkey",
          "date": "2 October 2017",
          "birthTime": "2019-02-22T19:22:43.263Z",
          "aspectRatio": 1.5
      },
      {
          "id": "j2ye1c8sqo1hrrziwcyp",
          "dominantColor": "#687279",
          "url": "http://res.cloudinary.com/dizrcuwkb/image/upload/h_{{HEIGHT}}/v1551096016/demo/j2ye1c8sqo1hrrziwcyp.jpg",
          "location": "Istanbul - Turkey",
          "date": "2 October 2017",
          "birthTime": "2019-02-22T19:27:22.254Z",
          "aspectRatio": 1.5
      },
      {
          "id": "ietag2gxpoodwin1tk7w",
          "dominantColor": "#7D8D92",
          "url": "http://res.cloudinary.com/dizrcuwkb/image/upload/h_{{HEIGHT}}/v1551096037/demo/ietag2gxpoodwin1tk7w.jpg",
          "location": "Istanbul - Turkey",
          "date": "2 October 2017",
          "birthTime": "2019-02-22T19:18:29.977Z",
          "aspectRatio": 1.5
      },
      {
          "id": "pongyhoenqtd9fplobe7",
          "dominantColor": "#2A0C02",
          "url": "http://res.cloudinary.com/dizrcuwkb/image/upload/h_{{HEIGHT}}/v1551096067/demo/pongyhoenqtd9fplobe7.jpg",
          "location": "Istanbul - Turkey",
          "date": "2 October 2017",
          "birthTime": "2019-02-22T19:17:56.546Z",
          "aspectRatio": 1.5
      },
      {
          "id": "yspgam7xwxuewih5uskd",
          "dominantColor": "#0F1022",
          "url": "http://res.cloudinary.com/dizrcuwkb/image/upload/h_{{HEIGHT}}/v1551096090/demo/yspgam7xwxuewih5uskd.jpg",
          "location": "Istanbul - Turkey",
          "date": "2 October 2017",
          "birthTime": "2019-02-23T02:45:53.910Z",
          "aspectRatio": 1.5
      },
      {
          "id": "us1rnepsvxjstobqvsb8",
          "dominantColor": "#908B83",
          "url": "http://res.cloudinary.com/dizrcuwkb/image/upload/h_{{HEIGHT}}/v1551096112/demo/us1rnepsvxjstobqvsb8.jpg",
          "location": "Istanbul - Turkey",
          "date": "2 October 2017",
          "birthTime": "2019-02-22T19:25:56.152Z",
          "aspectRatio": 1.5
      },
      {
          "id": "fkj717sjdjqn84ap0nv2",
          "dominantColor": "#251204",
          "url": "http://res.cloudinary.com/dizrcuwkb/image/upload/h_{{HEIGHT}}/v1551096136/demo/fkj717sjdjqn84ap0nv2.jpg",
          "location": "Istanbul - Turkey",
          "date": "2 October 2017",
          "birthTime": "2019-02-23T02:25:44.367Z",
          "aspectRatio": 1.5
      },
      {
          "id": "akursgpfc5xaoxvcoyax",
          "dominantColor": "#32211B",
          "url": "http://res.cloudinary.com/dizrcuwkb/image/upload/h_{{HEIGHT}}/v1551096159/demo/akursgpfc5xaoxvcoyax.jpg",
          "location": "Istanbul - Turkey",
          "date": "2 October 2017",
          "birthTime": "2019-02-23T02:41:51.409Z",
          "aspectRatio": 1.5
      },
      {
          "id": "y8hbits1tmfl5lxgi49y",
          "dominantColor": "#7B6241",
          "url": "http://res.cloudinary.com/dizrcuwkb/image/upload/h_{{HEIGHT}}/v1551096180/demo/y8hbits1tmfl5lxgi49y.jpg",
          "location": "Istanbul - Turkey",
          "date": "2 October 2017",
          "birthTime": "2019-02-22T18:48:48.637Z",
          "aspectRatio": 0.667
      },
      {
          "id": "io2izcgvvi9tvowdfrdy",
          "dominantColor": "#281102",
          "url": "http://res.cloudinary.com/dizrcuwkb/image/upload/h_{{HEIGHT}}/v1551096200/demo/io2izcgvvi9tvowdfrdy.jpg",
          "location": "Istanbul - Turkey",
          "date": "2 October 2017",
          "birthTime": "2019-02-22T19:08:53.973Z",
          "aspectRatio": 1.5
      },
      {
          "id": "tvailtyw00ylbrmartek",
          "dominantColor": "#897748",
          "url": "http://res.cloudinary.com/dizrcuwkb/image/upload/h_{{HEIGHT}}/v1551096224/demo/tvailtyw00ylbrmartek.jpg",
          "location": "Istanbul - Turkey",
          "date": "2 October 2017",
          "birthTime": "2019-02-22T19:34:30.123Z",
          "aspectRatio": 0.667
      },
      {
          "id": "wswixjjjrgwjrgdctolq",
          "dominantColor": "#D4D5DC",
          "url": "http://res.cloudinary.com/dizrcuwkb/image/upload/h_{{HEIGHT}}/v1551096254/demo/wswixjjjrgwjrgdctolq.jpg",
          "location": "Istanbul - Turkey",
          "date": "2 October 2017",
          "birthTime": "2019-02-03T20:56:21.035Z",
          "aspectRatio": 1.5
      },
      {
          "id": "eyif5rsyosgwxmbo5hks",
          "dominantColor": "#B3BCD0",
          "url": "http://res.cloudinary.com/dizrcuwkb/image/upload/h_{{HEIGHT}}/v1551096276/demo/eyif5rsyosgwxmbo5hks.jpg",
          "location": "Istanbul - Turkey",
          "date": "2 October 2017",
          "birthTime": "2019-02-22T18:52:01.593Z",
          "aspectRatio": 0.667
      },
      {
          "id": "wpj2linbmbtzde7cb8ek",
          "dominantColor": "#141827",
          "url": "http://res.cloudinary.com/dizrcuwkb/image/upload/h_{{HEIGHT}}/v1551096296/demo/wpj2linbmbtzde7cb8ek.jpg",
          "location": "Istanbul - Turkey",
          "date": "2 October 2017",
          "birthTime": "2019-02-22T19:38:16.599Z",
          "aspectRatio": 0.667
      },
      {
          "id": "guh4eusouhfgflamoizl",
          "dominantColor": "#C1C2C9",
          "url": "http://res.cloudinary.com/dizrcuwkb/image/upload/h_{{HEIGHT}}/v1551096322/demo/guh4eusouhfgflamoizl.jpg",
          "location": "Istanbul - Turkey",
          "date": "2 October 2017",
          "birthTime": "2019-02-22T19:42:44.809Z",
          "aspectRatio": 0.667
      },
      {
          "id": "io4c51qgwovteosykgjy",
          "dominantColor": "#D3CCC4",
          "url": "http://res.cloudinary.com/dizrcuwkb/image/upload/h_{{HEIGHT}}/v1551096349/demo/io4c51qgwovteosykgjy.jpg",
          "location": "Istanbul - Turkey",
          "date": "2 October 2017",
          "birthTime": "2019-02-22T18:59:26.413Z",
          "aspectRatio": 0.667
      }]

        this.setState(prevState => ({
          imageDataGrouped: prevState.imageDataGrouped.map(
              group => group.date === "2 October 2017"? { ...group, items: newItems }: group
            )
          
          }))
          ;
      }
    }

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
        scaleOfImages={3}
        updateGroups={this.updateGroup}
      />
    );
  }
}
