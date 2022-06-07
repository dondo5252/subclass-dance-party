var makeSpinningDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer spin"><img src="https://thumbs.gfycat.com/AridDrearyAquaticleech-size_restricted.gif"></span>');
  this.setPosition(top, left);
  //this.oldStep = this.step; // this.step is makeDancer's step
};

makeSpinningDancer.prototype = Object.create(makeDancer.prototype);
makeSpinningDancer.prototype.constructor = makeSpinningDancer;


// makeSpinningDancer.prototype.step = function() {
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

makeDancer.prototype.spinningAnimation = function() {
  var styleSettings = {

  };
  this.$node.css(styleSetting);
};