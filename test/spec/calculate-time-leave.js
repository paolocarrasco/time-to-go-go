describe('Runner', function() {
  var runner;
  var chronos;
  var browserHandler;
  var expectedTimeOfDeparture;

  beforeEach(function() {
    expectedTimeOfDeparture = '7:33pm';
    chronos = { calculateTimeOfDeparture: _.noop };
    browserHandler = jasmine.createSpyObj('browserHandler', ['getTimes', 'printTime']);
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
      expect(chronos.calculateTimeOfDeparture).toHaveBeenCalled();
    });

    it('should print the time of departure', function() {
      expect(browserHandler.printTime).toHaveBeenCalledWith(expectedTimeOfDeparture);
    });
  });
});
