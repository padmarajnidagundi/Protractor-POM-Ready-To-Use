exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',


  // Protractor parallel execution enable shardTestFiles: true, maxInstances: 2,
  // shardTestFiles: true,
  // maxInstances: 2,


  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['Tests/ProtractorHomePageTest.js'],

  //Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    showColors: true,   // Use colors in the command line report.  
    defaultTimeoutInterval: 120000  // Time to wait in ms before a test fails. Default value = 30000
  }


};

//Page Object Basic Model ( Ready To Use ) - UI Test Automation Design Pattern for protractortest.org
//Contact me! if you have more ideas - padmaraj.nidagundi@gmail.com
//https://github.com/padmarajnidagundi