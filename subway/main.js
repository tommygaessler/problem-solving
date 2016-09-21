const subway = {
  line_N: ['5 Av / 59 St', '57 St - 7 Av', '49 St', 'Times Sq - 42 St', '34 St - Herald Sq'],
  line_E: ['50 St', '7 Av', '5 Av / 53 St', '51 St'],
  line_D: ['59 St - Columbus Circle', '7 Av', '47 - 50 Sts Rockefeller Ctr', '34 St - Herald Sq'],
  line_1: ['59 St - Columbus Circle', '50 St', 'Times Sq - 42 St', '34 St Penn Station']
};

function transfers(stops) {

  var sameStops = [];

  for (var trains in subway) {
    if (trains !== stops) {
      subway[stops].forEach(function(stop) {
        if (subway[trains].includes(stop)) {
          sameStops.push({stop: `${stop}`, train: trains});
        }
      });
    }
  }
  return sameStops;
}

console.log(transfers('line_1'));
