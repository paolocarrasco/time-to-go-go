(function(context) {
  function Chronos() {
    var laborHours = moment.duration(8, 'hours');

    this.calculateTimeOfDeparture = function(times) {
      var morningSpan = times.lunchStart.diff(times.punchin);
      var timeToGetLaborHours = laborHours.subtract(morningSpan, 'milliseconds');
      return times.lunchEnd.add(timeToGetLaborHours, 'milliseconds');
    };
  }

  context.Chronos = Chronos;
})(window);
