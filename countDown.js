var countdownGenerator = function (x) {

  return function(){
    if (x > 0){
      console.log("T-minus", x +"...");
    } else {
       switch (x){
      case 0:
      console.log("Blast Off!");
      break;
      default:
      console.log("Rockets already gone, bub!");
      break;
    }
    }


    x -= 1;
      // case -1:
      // console.log("Rockets already gone, bub!");
      // break;
      // case -2:
      // console.log("Rockets already gone, bub!");


  }

};

var countdown = countdownGenerator(5);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
