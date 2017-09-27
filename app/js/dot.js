import * as d3 from "d3";
import {Slide} from "./Slide"
import {Shake} from "./actions/Shake"
import '../css/main.css';

export class Dot {
  constructor(cx, cy, rad){
  this.cx = cx + "%";
  this.cy = cy;
  this.radius = rad;
  this.dot = null;
  this.width = 42;
  this.height = 533;
  this.yEvent = null;
  // console.log("in constructor this is ",this);
}

  buildDot(){
    this.dot =
    d3.select("body").append("svg").attr("width",this.width).attr("height",this.height).append("circle").attr("cx",this.cx).attr("cy",this.cy).attr("r",this.radius).attr("fill","white").attr("border-width","5px");
    return this.dot;
  }

  onDrag(){
    // var percEv = ((d3.mouse.y * 100)/533);
    // if(percEv < 20) {percEv = 20;}
    // console.log("percEv is ",percEv);

    /*
    TODO: if(mobile or small screen, then use below logix with "touch" event)
    */
    var mouseAt = d3.event.y;
    console.log("eventY is ", d3.event.y);
    if(mouseAt > 90 && mouseAt < 435){
      d3.select(this).attr("cy", mouseAt);
    } else if(mouseAt >= 435){
      d3.select(this).attr("cy", 98);
    } else {
      return null;
    }
  }

  // getYEvent(){
  //   console.log("in getYevnet ", d3.event.y);
  //   return d3.event.y;
  // }
  // }
}
