import Page from './page';

class HomePage extends Page {
    get parkingNumber() { return $('//input[@placeholder="C0-1"]') };
    get licensePlate() { return $('//input[@placeholder="N393N"]') };
    get duration() { return $('//select[@name="duration"]') };
    get parkingNumberError() { return $('//p[@class="text-red-400 text-sm"]') };
    get submit() { return $('//input[@name="submit"]') };

    open() {
        super.open('http://localhost:3000');
    }

    typeNumber(parkingSpotNumber) {
        this.parkingNumber.click();
        this.parkingNumber.setValue(parkingSpotNumber);
    }

    typePlate(plateNumber) {
        this.licensePlate.click();
        this.licensePlate.setValue(plateNumber);
    }

    selectDuration(index) {
        this.duration.selectByIndex(index);
    }

    submitForm() {
        this.submit.click();
    }
}
export default new HomePage();