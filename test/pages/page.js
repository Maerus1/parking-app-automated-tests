export default class Page {
    constructor() {
        this.title = 'Dan\s Parking Garage';
    }

    open(path) {
        browser.url(path);
    }
}