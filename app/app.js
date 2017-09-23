import {Dot} from './js/Dot';
import {Slide} from './js/Slide'
import * as d3 from "d3";
import './css/main.css';

(function(){

  var dot = new Dot(198, 200, 99);
  var built = dot.buildDot();
  built.call(d3.drag().on("drag", dot.onDrag));

})();
