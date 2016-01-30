var monthMap = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December',
};

function timeService(time) {
  var unix_ms = Number(time);
  if (isNaN(unix_ms)) {
    // If time is natural language string, convert to unix_ms
    var timestr_with_tz = new Date(time);
    unix_ms = timestr_with_tz.getTime() - 1000*60*timestr_with_tz.getTimezoneOffset();
  } else {
    // The default timestamp is 's', turn into 'ms'
    unix_ms *= 1000;
  }
  var d = new Date(unix_ms);
  var unix = unix_ms/1000;
  var timeValid = !isNaN(unix);
  var natural = monthMap[d.getUTCMonth()+1]+' '+d.getUTCDate()+', '+d.getUTCFullYear();
  return JSON.stringify({
    unix: timeValid ? unix : NaN,
    natural: timeValid ? natural : NaN,
    // compelete: d,
  });
}

module.exports = timeService;
// console.log(timeService('December 15, 2015'));
// console.log(timeService(1450137600));
// console.log(timeService('dfsdfs'));
// console.log(timeService('December 15, 2015 12:23'));
// console.log(timeService(24242));
