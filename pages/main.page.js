import BasePage from "./base.page";
import LoginPage from "./login.page";


const _myAccBtn = by.xpath("//li[2]/*[@class='dropdown-toggle']");
const _loginBtn = by.xpath("//a[@href='http://www.phptravels.net/login']"); 

export default class MainPage extends BasePage {    

    static open() {
        
        browser.get("http://www.phptravels.net/en");        

        return new MainPage();
    }

    navigateToLogin() {

        element(_myAccBtn).click();
        element(_loginBtn).click();

        return new LoginPage();
    }

    waitForPageAvailable() {
        
        browser.wait(ExpectedConditions.visibilityOf(element(_myAccBtn)), browser.params.explicitWait, "myAccBtn not present");
        
        return this;
    }

}