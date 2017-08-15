import BasePage from "./base.page";

const _myAccBtn = by.xpath("//li[2]/*[@class='dropdown-toggle']");
const _loginBtn = by.xpath("//a[@href='http://www.phptravels.net/login']"); 

export default class MainPage extends BasePage {    

    open() {
        
        console.log("Main Page loading ...");
        browser.get("http://www.phptravels.net/en");
        console.log("Main Page loaded");

        return this;
    }

    navigateToLogin() {
        element(_myAccBtn).click();
        element(_loginBtn).click();
    }

    isPageAvailable() {

    }

}