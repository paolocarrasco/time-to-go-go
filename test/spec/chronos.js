describe('Chronos', function() {
  var chronos;

  beforeEach(function() {
    chronos = new Chronos();
  });

  describe('#calculateTimeOfDeparture', function() {
    var timeToDeparture;
    var expectedTimeOfDeparture;

    beforeEach(function() {
      expectedTimeOfDeparture = moment();

      var times = {
        punchin: expectedTimeOfDeparture.subtract(9, 'hours'),
        lunchStart: expectedTimeOfDeparture.subtract(3, 'hours'),
        lunchEnd: expectedTimeOfDeparture.subtract(4, 'hours')
      };

      timeToDeparture = chronos.calculateTimeOfDeparture(times);
    });

    it('should calculate the time between two hours', function() {
      expect(timeToDeparture.isSame(expectedTimeOfDeparture)).toBe(true);
    });
  });
});
