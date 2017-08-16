require("babel-core/register")({presets: ["es2015"]});
let jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  directConnect: false,
  framework: "jasmine2",
  seleniumAddress: "http://localhost:4444/wd/hub",
  specs: ["tests/suiteA_spec.js"],

  params: {
        implicitWait: 10000,
        explicitWait: 20000
    },

  capabilities: {
    "browserName": "chrome"
  },

  multiCapabilities: [],

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

  onPrepare: () => {        
    browser.ignoreSynchronization = true;
    browser.manage().timeouts().implicitlyWait(browser.params.implicitWait);
    browser.manage().window().maximize(); 

    jasmine.getEnv().addReporter(
      new jasmine2HtmlReporter({
          savePath: "result",
          screenshotsFolder: "screenshots",
          showPassed: false,
          cleanDestination: true
      })
    );
    
  }

};
