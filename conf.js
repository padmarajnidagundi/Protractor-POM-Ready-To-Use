exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['Tests/angularjs.js']
};

//Page Object Basic Model ( Ready To Use ) - UI Test Automation Design Pattern for protractortest.org
//Contact me! if you have more ideas - padmaraj.nidagundi@gmail.com
//https://github.com/padmarajnidagundi

//How To Run ! How To Use Page Object Basic Model ( Ready To Use ) 

//Step 1:
//Install NodeJs https://nodejs.org/en/download/
//Install Protractor globally  -  npm install -g protractor
//Upadte web driver - webdriver-manager update
//Start webdriver-manager start
//Open this URL http://localhost:4444/wd/hub in browser to make sure its up


//Step 2:
//In another consol run the  - protractor conf.js
//Your will notice test are running against the protractortest.org on chrome browser
