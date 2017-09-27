export class Shake {
  constructor(maxMagnitude){
    this.maxMagnitude = maxMagnitude;
    this.startX = 0;
    this.startY = 0;
  }

  // randomInt(min, max) {
  //   min = Math.floor(min/10);
  //   max = Math.floor(max/10);
  //   console.log("max is ",max);
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // };

  // shakeIt(element, max){
  //   console.log("maxmag ",max);
  //   //
  //   // var randomX = this.randomInt(10, max);
  //   // var randomY = this.randomInt(10, max);
  //   // element.style.transform = 'translate(' + randomX + 'px ,' + randomY +'px)';
  //   // requestAnimationFrame(shakeIt)
  // }
}
