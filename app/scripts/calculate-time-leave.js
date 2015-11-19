"use strict";

(function (context) {
  function Runner(browserHandler, chronos) {
    this.init = function () {
      browserHandler.getTimes();
      var estimatedTimeOfDeparture = chronos.calculateTimeOfDeparture();
      browserHandler.printTime(estimatedTimeOfDeparture);
    };
  }

  context.Runner = Runner;
})(window);
//# sourceMappingURL=calculate-time-leave.js.map
