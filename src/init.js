$(document).ready(function () {
  window.dancers = [];

  $('.addDancerButton').on('click', function (event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // get the maker function for the kind of dancer we're supposed to make

    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    console.log(window.dancers);

    $('.lineUp').on('click', function () {
      for (let i = 0; i < window.dancers.length; i++) {
        var dancer = window.dancers[i];
        dancer.lineUp();
      }
    });

    console.log(window.dancers);
    $('.disperse').on('click', function () {
      for (let i = 0; i < window.dancers.length; i++) {
        var dancer = window.dancers[i];
        for (let j = 1; j < window.dancers.length; j++) {
          var dancerTwo = window.dancers[j];
          // if (dancerTwo === undefined) {
          //   dancerTwo = window.dancers[0];
          // }
          console.log(dancer, dancerTwo);
          var distance = Math.sqrt((Math.pow(dancer.top, 2)) + Math.pow(dancerTwo.top, 2));
          console.log(distance);
          if (distance < 1000) {
            dancerTwo.top += 100;
            dancerTwo.left += 100;
            dancer.setPosition(dancerTwo.top, dancerTwo.left);
          }

          // if (Math.abs(dancer.top - dancerTwo.top) <= 50) {
          //   dancerTwo.top += 300;
          //   dancerTwo.bottom += 300;
          // }

          // if (Math.abs(dancer.left - dancerTwo.left) <= 50) {
          //   dancerTwo.left += 300;
          //   dancerTwo.right += 300;
          // }


        }




      }



      // dancerTwo.setPosition(dancerTwo.top, dancerTwo.left);
    }
    );
    //   // dancer.top += 100;
    //   // dancer.left += 100;
    //   console.log(dancer.top, dancer.left);
    //   for (let j = 1; i < window.dancers.length; i++) {
    //     var dancerTwo = window.dancers[j];
    //     if (Math.abs(dancer.top - dancerTwo.top) < 100) {
    //       dancerTwo.top += 1000;
    //     }
    //     if (Math.abs(dancer.left - dancerTwo.left) < 100) {
    //       dancerTwo.left += 1000;
    //     }
    //     dancerTwo.setPosition(dancerTwo.top, dancerTwo.left);
    // }
    // console.log(window.dancers);



    $('body').append(dancer.$node);
  });
});

