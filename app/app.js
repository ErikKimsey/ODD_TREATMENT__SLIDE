import {Dot} from './js/Dot';
import {Slide} from './js/Slide'
import * as d3 from "d3";
import './css/main.css';

(function(){

  var dot = new Dot(200, 200, 99).buildDot();
  console.log(dot);
  dot.call(d3.drag().on("drag", dot.onDrag));

})();
