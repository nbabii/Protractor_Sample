import BasePage from "./base.page";

const _signUpBtn = by.xpath("//*[@id='loginfrm']//a[@href='http://www.phptravels.net/register']");
const _loginBtn = by.xpath("//*[@id='loginfrm']//button[@type='submit']");
const _forgetPassBtn = by.xpath("//a[@href='#ForgetPassword']"); 

export default class LoginPage extends BasePage {    

    static open() {
        
        browser.get("http://www.phptravels.net/login");        

        return new LoginPage();
    }

    navigateToSignUp() {
        
    }

    waitForPageAvailable() {

        browser.wait(ExpectedConditions.visibilityOf(element(_signUpBtn)), browser.params.explicitWait, "signUpBtn not present");
        browser.wait(ExpectedConditions.visibilityOf(element(_loginBtn)), browser.params.explicitWait, "loginBtn not present");
        browser.wait(ExpectedConditions.visibilityOf(element(_forgetPassBtn)), browser.params.explicitWait, "forgetPassBtn not present");

        return this;
    }

}