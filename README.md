
**Protractor-POM-Ready-To-Use** 
Page Object Basic Model ( Ready To Use ) - UI Test Automation Design Pattern for protractortest.org 
Contact me! if you have more ideas -  [padmaraj.nidagundi@gmail.com](mailto:padmaraj.nidagundi@gmail.com)  

 - https://github.com/padmarajnidagundi
 - https://www.npmjs.com/package/padmaraj
 - https://www.linkedin.com/in/padmarajn/

**How To Run ==> How To Use Page Object Design Pattern Basic Model ( Ready To Use )**

**Step 1:** 

 - Install NodeJs 
   [https://nodejs.org/en/download/](https://nodejs.org/en/download/)  
 - Make dir called "POM" in C:\ drive - Get into the folder 
 - Install Protractor globally with command: **npm install -g protractor**  
 - Update web driver with command -  **webdriver-manager update**  
 - Start the command **webdriver-manager start**  then open this local URL  [http://localhost:4444/wd/hub](http://localhost:4444/wd/hub)  in
   browser to make sure protractor up and running

**Step 2:** 
 - Go to the  [https://www.npmjs.com/package/protractor-page-object-model](https://www.npmjs.com/package/protractor-page-object-model)   - 
 - Copy the install command and run - **npm i protractor-page-object-model** 
 - Now you view *"POM framework"* in the C:\pom\node_modules\protractor-page-object-model
  **~~ OR ~~**
 - Clone / download from git  [https://github.com/padmarajnidagundi/Protractor-POM-Ready-To-Use](https://github.com/padmarajnidagundi/Protractor-POM-Ready-To-Use)

Finally, :-)

**Step 3:**
- In another consol run the command => **protractor conf.js** 
- Your will notice test are running against the protractortest.org on chrome browser

**Page code pattern** in the folder => "**Pages**"

    class HomePage {
    constructor() {
        this.homeLink = element(by.linkText('Home'));
        this.drop1Link = element(by.id('drop1'));
        this.tutorialLink = element(by.linkText('Tutorial'));
        this.drop2Link = element(by.id('drop2'));
        this.settingUpProtractorLink = element(by.linkText('Setting Up Protractor'));
        this.settingUpTheSeleniumServerLink = element(by.linkText('Setting Up the Selenium Server'));
        this.settingUpTheBrowserLink = element(by.linkText('Setting Up the Browser'));
        this.choosingAFrameworkLink = element(by.linkText('Choosing a Framework'));
        this.drop3Link = element(by.id('drop3'));
        this.fAQLink = element(by.linkText('FAQ'));
    }
    }
    module.exports = new HomePage();

**Test case code pattern** in the folder =>  **Tests**

    var homePage = require('../Pages/homePage');
    var testdata = require('../Testdata/data.json');
    const EC = protractor.ExpectedConditions;
    describe('Check the https://www.protractortest.org/ main page Home and Tutorial links', function () {
    it('HomePageTest 1 .1 - It should navigate to home page! check Tutorial page and go back to Home page', function () {
    //Given
    browser.ignoreSynchronization = true;
    browser.driver.manage().window().maximize();
    browser.get(testdata.environment);
    browser.sleep(6000);
    //When
    homePage.tutorialLink.click();
    browser.wait(EC.visibilityOf(homePage.homeLink), 10000);
    //Then
    homePage.homeLink.click();
    browser.wait(EC.visibilityOf(homePage.homeLink), 10000);   
    }); 
    });

 **Used jasmine for assertion**
 [https://jasmine.github.io/](https://jasmine.github.io/)
 
 **Test data is isolated from the test case** in the folder  => **Testdata** using JSON file.
  
    { 
    "environment": "https://www.protractortest.org/"
    }

**Standard protractor configuration coming from **=>**     conf.js**
 
## Keywords
Software testing, Test automation, UI test automation, Qualiy assurance, Test automation framework, Test automation framework architecture, Test automation framework design, Page object model, UAT testing, E2E testing, Angular testing, AngularJS testing.