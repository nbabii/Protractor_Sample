export default class BasePage {

    constructor() {
        
        if (new.target === BasePage) {
            throw new TypeError("Cannot construct Abstract BasePage instances directly");
        }
        
        if (this.waitForPageAvailable === undefined) {
            throw new TypeError(this.constructor.name + " Must override method waitForPageAvailable()");
        }
        
        this.isPageAvailable = false;
        this.waitForPageAvailable();
        this.isPageAvailable = true;

    }    

}
