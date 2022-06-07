var makeSlidingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer slide"><img src = "https://c.tenor.com/qYXx49I4a3YAAAAC/jay-leno-back-and-forth.gif"></span>');
  this.setPosition(top, left);
  //this.oldStep = this.step; // this.step is makeDancer's step
};

makeSlidingDancer.prototype = Object.create(makeDancer.prototype);
makeSlidingDancer.prototype.constructor = makeSlidingDancer;


// makeSlidingDancer.prototype.step = function() {
//   // call the old version of step at the beginning of any call to this new version of step
// //  oldStep();
//   makeDancer.prototype.step.call(this);
//   // toggle() is a jQuery method to show/hide the <span> tag.
//   // See http://api.jquery.com/category/effects/ for this and
//   // other effects you can use on a jQuery-wrapped html tag.
//   this.$node.toggle();
// };



//we plan to overwrite the step function below,
//but we still want the superclass step behavior to work,
//keep a copy of the old version of this function
//call the old version of step at the beginning of any call to this new version of step