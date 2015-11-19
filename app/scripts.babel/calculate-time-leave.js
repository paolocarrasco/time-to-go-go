(function(context) {
  'use strict';

  function Runner(browserHandler, chronos) {
    this.init = function() {
      browserHandler.getTimes();
      let estimatedTimeOfDeparture = chronos.calculateTimeOfDeparture();
      browserHandler.printTime(estimatedTimeOfDeparture);
    };
  }

  context.Runner = Runner;
})(window);
