// The second argument/parameter is expected to be a function
function myFunc(element, i){
  if (element === "Waldo") {
    found(i);   // execute callback

  }
}

function findWaldo(arr, found) {
  // for (var i = 0; i < arr.length; i++) {
  arr.forEach(myFunc);


     // arr.forEach(function(element){
     //  console.log(element);
     //  });


}


function actionWhenFound(i) {
  console.log("Found Waldo at index", i);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
