
// for (var i = 0; i < 3; i++) {
//   setTimeout(function() { console.log(i) }, 1000 * i);
// }

// for (var i = 0; i < 3; i++) {
//   setInterval(function() { console.log(i) }, 1000)
// }


var i = 0
  setInterval(function() {console.log(i);
                          i++;
                          if (i >= 3) {clearInterval(this)}
                         }, 1000);


  // var i = 0
  //   setTimeout(function() {console.log(i);
  //                          i++;
  //                          if (i >= 3) {clearTimeout(this)}
  //                         }, 1000);