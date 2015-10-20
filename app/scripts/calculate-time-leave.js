(function(context) {
  var punchin;
  var lunchStart;
  var lunchEnd;
  var timeOfDeparture;
  var $ = context.jQuery;
  var moment = context.moment;

  function calculateTimeToLeave(punchin, lunchStart, lunchEnd) {
    var morningSpan = lunchStart.diff(punchin);
    var laborHours = moment.duration(8, 'hours');
    var timeToGetLaborHours = laborHours.subtract(morningSpan, 'milliseconds');
    console.log(punchin.format('HH:mm'));
    console.log(lunchStart.format('HH:mm'));
    console.log(lunchEnd.format('HH:mm'));
    return lunchEnd.add(timeToGetLaborHours, 'milliseconds');
  }

  function obtainTime(index) {
    var timeInText = $('.seccion2 tr:nth-child(2) > td:nth-child(' + index + ')').text();
    return moment(timeInText.trim(), 'HH:mm:ss');
  }

  function importDependencies() {
    $('head').append('<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>');
    $('head').append('<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.6/moment.min.js"></script>');
  }

  function askConfirmationToRefreshPage() {
    context.onbeforeunload = function() { return 'Going to the home page?'; };
  }

  function printEstimatedTimeOfDeparture(timeOfDeparture) {
    $('.seccion2 tr:nth-child(2) > td:nth-child(5)')
      .css({color: '#c80', transition: 'all 2s ease', padding: '0.2em', 'text-align': 'center'})
      .text(timeOfDeparture.format('HH:mm'))
      .append('<br><span>(estimated)</span>');
  }

  function init() {
    punchin = obtainTime(2);
    lunchStart = obtainTime(3);
    lunchEnd = obtainTime(4);

    timeOfDeparture = calculateTimeToLeave(punchin, lunchStart, lunchEnd);

    printEstimatedTimeOfDeparture(timeOfDeparture);
  }

  importDependencies();
  askConfirmationToRefreshPage();
  init();
})(this);
