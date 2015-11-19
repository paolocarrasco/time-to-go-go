describe('BrowserHandler', function() {
  var timesheetTable = '<div id="container"> <div id="row"> <div id="left"> <table class="seccion2"> <tr> <th> Date </th> <th> In </th> <th> Out </th> <th> In </th> <th> Out </th> <th> In </th> <th> Out </th> <th> Worked </th> <th> Detail </th> </tr> <tr> <td> 19 Nov 2015 </td> <td> 08:24:28 </td> <td> 12:30:26 </td> <td> 13:53:56 </td> <td> </td> <td> </td> <td> </td> <td> 04:05:58 </td> <td> <span class="rowDetail" title="In &amp;nbsp;&amp;nbsp; - 08:24:28&lt;br/&gt;Out - 12:30:26&lt;br/&gt;In &amp;nbsp;&amp;nbsp; - 13:53:56&lt;br/&gt;                                                          " style="background: gainsboro; padding: 2px; -moz-border-radius: 2px;width : 5px;"> ...</span> </td> </tr> <tr> <td> 18 Nov 2015 </td> <td> 08:27:18 </td> <td> 18:20:06 </td> <td> </td> <td> </td> <td> </td> <td> </td> <td> 09:52:48 </td> <td> <span class="rowDetail" title="In &amp;nbsp;&amp;nbsp; - 08:27:18&lt;br/&gt;Out - 18:20:06&lt;br/&gt;                                                          " style="background: gainsboro; padding: 2px; -moz-border-radius: 2px;width : 5px;"> ...</span> </td> </tr> <tr> <td> 17 Nov 2015 </td> <td> 08:21:20 </td> <td> 12:24:56 </td> <td> 13:36:18 </td> <td> 17:13:37 </td> <td> </td> <td> </td> <td> 07:40:55 </td> <td> <span class="rowDetail" title="In &amp;nbsp;&amp;nbsp; - 08:21:20&lt;br/&gt;Out - 12:24:56&lt;br/&gt;In &amp;nbsp;&amp;nbsp; - 13:36:18&lt;br/&gt;Out - 17:13:37&lt;br/&gt;                                                          " style="background: gainsboro; padding: 2px; -moz-border-radius: 2px;width : 5px;"> ...</span> </td> </tr> <tr> <td> 16 Nov 2015 </td> <td> 08:31:11 </td> <td> 12:07:10 </td> <td> 13:25:06 </td> <td> 17:28:50 </td> <td> 17:28:55 </td> <td> 18:52:47 </td> <td> 09:03:35 </td> <td> <span class="rowDetail" title="In &amp;nbsp;&amp;nbsp; - 08:31:11&lt;br/&gt;Out - 12:07:10&lt;br/&gt;In &amp;nbsp;&amp;nbsp; - 13:25:06&lt;br/&gt;Out - 17:28:50&lt;br/&gt;In &amp;nbsp;&amp;nbsp; - 17:28:55&lt;br/&gt;Out - 18:52:47&lt;br/&gt;                                                          " style="background: gainsboro; padding: 2px; -moz-border-radius: 2px;width : 5px;"> ...</span> </td> </tr> </table> </div> </div> </div>';
  var browserHandler;

  beforeEach(function() {
    browserHandler = new BrowserHandler();
    jQuery('body').append(timesheetTable);
  });

  afterEach(function() {
    jQuery('#container').remove();
  });

  describe('#getTimes', function() {
    var times;

    beforeEach(function() {
      times = browserHandler.getTimes();
    });

    it('should return an object with the times of the recent row of the timesheet', function() {
      expect(times.punchin.format('HH:mm')).toBe('08:24');
      expect(times.lunchStart.format('HH:mm')).toBe('12:30');
      expect(times.lunchEnd.format('HH:mm')).toBe('13:53');
    });
  });

  describe('#printEstimatedTimeOfDeparture', function() {
    var cellForTimeOfDeparture;

    beforeEach(function() {
      cellForTimeOfDeparture = jQuery('.seccion2 tr:nth-child(2) > td:nth-child(5)');
      browserHandler.printEstimatedTimeOfDeparture(moment('17:15', 'HH:mm'));
    });

    it('should print the time in the fifth cell of the recent row in the timesheet', function() {
      expect(cellForTimeOfDeparture.text()).toContain('17:15');
    });

    it('should warn that is estimated in the fifth cell of the recent row', function() {
      expect(cellForTimeOfDeparture.find('span').text()).toBe('(estimated)');
    });

    it('should center the cell', function() {
      expect(cellForTimeOfDeparture.css('text-align')).toBe('center');
    });
  });
});
