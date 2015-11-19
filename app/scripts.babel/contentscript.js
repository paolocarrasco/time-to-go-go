(function() {
  var chronos = new Chronos();
  var browserHandler = new BrowserHandler();
  var runner = new Runner(browserHandler, chronos);
  runner.init();
})();
