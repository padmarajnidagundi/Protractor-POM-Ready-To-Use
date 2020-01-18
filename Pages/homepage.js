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