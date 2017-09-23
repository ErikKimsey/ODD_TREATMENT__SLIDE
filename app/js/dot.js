import * as d3 from "d3";
import {Slide} from "./Slide"
import '../css/main.css';

export class Dot {
  constructor(cx, cy, rad){
  this.cx = cx;
  this.cy = cy;
  this.radius = rad;
  this.dot = null;
  this.width = 199;
  this.height = 533;
  console.log("in constructor this is ",this);
}

  buildDot(){
    this.dot =
    d3.select("body").append("svg").attr("width",this.width).attr("height",this.height).append("circle").attr("cx",this.cx).attr("cy",this.cy).attr("r",this.radius);
    return this.dot;
  }

  onDrag(){
    console.log("new Y is ", d3.event.y);
    if(d3.event.y > 101 && d3.event.y < 433){
      d3.select(this).attr("cy", d3.event.y + 99);
    } else {
      return null;
    }
    console.log("in dragging this is ", this);
  }
}
