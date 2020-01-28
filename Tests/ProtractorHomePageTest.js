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