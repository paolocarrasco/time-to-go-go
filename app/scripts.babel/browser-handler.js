(function(context, $) {
  'use strict';

  function obtainTime(index) {
    var timeInText = $('.seccion2 tr:nth-child(2) > td:nth-child(' + index + ')').text();
    return moment(timeInText.trim(), 'HH:mm:ss');
  }

  function BrowserHandler() {

    this.getTimes = function() {
      return {
        punchin: obtainTime(2),
        lunchStart: obtainTime(3),
        lunchEnd: obtainTime(4)
      };
    };

    this.printEstimatedTimeOfDeparture = function(timeOfDeparture) {
      var cellToPrint = $('.seccion2 tr:nth-child(2) > td:nth-child(5)');

      if(cellToPrint.text().trim().length === 0) {
        cellToPrint
          .css({color: '#c80', transition: 'all 2s ease', padding: '0.2em', 'text-align': 'center'})
          .text(timeOfDeparture.format('HH:mm'))
          .append('<br><span>(estimated)</span>');

        setTimeout(function () {
          cellToPrint.text('');
        }, 4000);
      }
    };
  }

  context.BrowserHandler = BrowserHandler;
})(window, jQuery);
