import * as d3 from "d3";
import {Slide} from "./Slide"
import {Shake} from "./actions/Shake"
import '../css/main.css';

export class Dot {
  constructor(cx, cy, rad){
  this.cx = cx + "%";
  this.cy = cy + "%";
  this.radius = rad;
  this.dot = null;
  this.width = 199;
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
    var percEv = ((d3.event.y * 100)/533);
    console.log(("percEv is ",percEv));
    console.log("new Y is ", d3.event.y);
    if(percEv > 20 && percEv < 81){
      d3.select(this).attr("cy", percEv + "%");
    } else if(d3.event.y >= 81){
      d3.select(this).attr("cy", "20%");
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
