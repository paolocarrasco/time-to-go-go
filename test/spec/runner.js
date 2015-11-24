describe('Runner', function() {
  var runner;
  var chronos;
  var browserHandler;
  var expectedTimeOfDeparture;
  var expectedTimes;

  beforeAll(function() {
    browserHandler = { getTimes: _.noop, printEstimatedTimeOfDeparture: _.noop };
  });

  beforeEach(function() {
    expectedTimeOfDeparture = '7:33pm';
    expectedTimes = { punchin: '7:30', lunchStart: '12:00', lunchEnd: '13:15' };
    chronos = { calculateTimeOfDeparture: _.noop };
    spyOn(browserHandler, 'getTimes').and.returnValue(expectedTimes);
    spyOn(browserHandler, 'printEstimatedTimeOfDeparture');
    spyOn(chronos, 'calculateTimeOfDeparture').and.returnValue(expectedTimeOfDeparture);
    runner = new Runner(browserHandler, chronos);
  });

  describe('#init', function() {
    beforeEach(function() {
      runner.init();
    });

    it('should get the times', function() {
      expect(browserHandler.getTimes).toHaveBeenCalled();
    });

    it('should calculate the time of departure', function() {
      expect(chronos.calculateTimeOfDeparture).toHaveBeenCalledWith(expectedTimes);
    });

    it('should print the time of departure', function() {
      expect(browserHandler.printEstimatedTimeOfDeparture).toHaveBeenCalledWith(expectedTimeOfDeparture);
    });
  });
});
