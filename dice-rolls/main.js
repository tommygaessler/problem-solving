function diceRolls(dice, sides) {

  if (dice > 0 && sides > 0) {
    var output = {
      rolls: dice,
      results: []
    };

    for (var i = 1; i <= dice; i++) {
      var roll = Math.floor((Math.random() * sides) + 1);
      output.results.push(roll);
    }

    output.results.reduce(function(total, num) {
      total += num;
      output.total = total;
      return output.total;
    });

    return output;
  } else {
    return 'Enter a Correct Dice';
  }
}
console.log(diceRolls(6, 6));
