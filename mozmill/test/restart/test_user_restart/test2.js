var setupModule = function(module) {
  controller = mozmill.getBrowserController();
}

/**
 * This test should fail
 * (Expected restart but none detected)
 */
var testNoExpectedRestart = function(){
  controller.startUserShutdown(1000);
  controller.sleep(2000);
}
