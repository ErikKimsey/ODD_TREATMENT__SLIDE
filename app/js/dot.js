import * as d3 from "d3";
import {Slide} from "./Slide"
import '../css/main.css';

export class Dot {
  constructor(cx, cy, rad){
  this.cx = cx;
  this.cy = cy;
  this.radius = rad;
  this.svg = null;
  this.dot = null;
  this.width = 199;
  this.height = 533;
}

  buildDot(){
    this.dot =
    d3.select("body").append("svg").attr("width",this.width).attr("height",this.height).append("circle").attr("cx",this.cx).attr("cy",this.cy).attr("r",this.radius);
    return this.dot;
  }

  onDrag(){
    console.log("dragging");
  }
}
