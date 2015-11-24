(function(context) {
  'use strict';

  function Runner(browserHandler, chronos) {
    this.init = function() {
      var times = browserHandler.getTimes();
      var estimatedTimeOfDeparture = chronos.calculateTimeOfDeparture(times);
      browserHandler.printEstimatedTimeOfDeparture(estimatedTimeOfDeparture);
    };
  }

  context.Runner = Runner;
})(window);
