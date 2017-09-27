import {Dot} from './js/Dot';
import {Slide} from './js/Slide';
import {Shake} from './js/actions/Shake';
import * as d3 from "d3";
import './css/main.css';

(function(){

  var dot = new Dot(50, 98, 99);
  var built = dot.buildDot();
  var shake = new Shake();
  built.call(d3.drag().on("drag", dot.onDrag));
  // // var yEv = built.call(d3.drag().on("drag", function(){
  //   console.log("on draggiong trying to get y");
  //   var yEvent = dot.getYEvent();
  //   var elem = document.querySelector("svg");
  //   console.log("elem is  ",elem);
  //   console.log("is this y ev ",yEvent);
  //   // return shake.shakeIt(elem,yEvent);
  // }));

})();
