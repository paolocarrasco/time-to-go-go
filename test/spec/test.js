describe('Runner', function() {
  'use strict';

  var runner;
  var chronos;

  beforeEach(function() {
    chronos = {getTimes: _.noop};
    spyOn(chronos, 'getTimes');
    runner = new Runner(chronos);
  });

  describe('#init', function() {
    beforeEach(function() {
      runner.init();
    });

    it('should get the times', function() {
      expect(chronos.getTimes).toHaveBeenCalled();
    });

    it('should calculate the time of departure', function() {

    });

    it('should print the time of departure', function() {

    });
  });
});
