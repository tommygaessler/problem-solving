function colorMixer() {
  // console.log(arguments);
  var mixed = [0, 0, 0];

  for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);

    for (var j = 0; j < 3; j++) {
      mixed[j] += arguments[i][j];
    }
    mixed[i] /= arguments.length;
    mixed[i] =Math.ceil(mixed[i]);
  }

  return mixed;
}

let red = [255, 0, 0];
let green = [0, 255, 0];
let blue = [0, 0, 255];

console.log(colorMixer(red, green, blue));
