import HomePage from './../pages/home.page';

describe('webdriver.io page', () => {
    it('should have the right title', () => {
        HomePage.open();
        const title = browser.getTitle()
        expect(browser).toHaveTitle('Dan\'s Parking Garage');
    })
    it('should fill out and submit the form', () => {
        HomePage.open();
        HomePage.typeNumber('D-01');
        HomePage.typePlate('FUNNYMAN');
        HomePage.selectDuration(3);
        HomePage.submitForm();
    })
    it('should trigger parking spot number error', () => {
        HomePage.open();
        HomePage.typeNumber('D-01');
        HomePage.typePlate('FUNNYMAN');
        HomePage.selectDuration(3);
        HomePage.submitForm();
        const expectedText = 'Please enter a parking spot number';

        expect(HomePage.parkingNumberError).toHaveText(expectedText);
    })
})