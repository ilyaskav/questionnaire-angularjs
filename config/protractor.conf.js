let specs = '../spec/';
let data = {
    mainSiteUrl: 'http://localhost:8080'
};

exports.config = {
    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [specs + 'spec.js'],
    capabilities: {
        browserName: 'chrome'
    },
    onPrepare: function() {
        let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
        // add jasmine spec reporter
        jasmine.getEnv().addReporter(new SpecReporter({
            displayPendingSpec: true, // display each pending spec
            displaySpecDuration: true, // display each spec duration
            displaySuiteNumber: true
        }));

        browser.configuration = data;
        browser.driver.manage().window().maximize();
    },
    defaultWaitTime: 3000
}