import BasePage from "./base.page";

const _signUpBtn = by.xpath("//*[@id='loginfrm']//a[@href='http://www.phptravels.net/register']");
const _loginBtn = by.xpath("//*[@id='loginfrm']//button[@type='submit']");
const _forgetPassBtn = by.xpath("//a[@href='#ForgetPassword']"); 

const _emailInput = by.xpath("//input[@name='username']"); 
const _passInput = by.xpath("//input[@name='password']"); 

const _errorMsg = by.xpath("//*[@id='loginfrm']//div[contains(@class, 'alert')]"); 

export default class LoginPage extends BasePage {    

    static open() {
        
        browser.get("http://www.phptravels.net/login");        

        return new LoginPage();
    }

    loginAsWrongUser(email, password) {
        
        element(_emailInput).sendKeys(email);
        element(_passInput).sendKeys(password);
        element(_loginBtn).click();
        
        return element(_errorMsg).getText();        
    }

    waitForPageAvailable() {

        browser.wait(ExpectedConditions.visibilityOf(element(_emailInput)), browser.params.explicitWait, "emailInput not present");
        browser.wait(ExpectedConditions.visibilityOf(element(_passInput)), browser.params.explicitWait, "passInput not present");
        browser.wait(ExpectedConditions.visibilityOf(element(_signUpBtn)), browser.params.explicitWait, "signUpBtn not present");
        browser.wait(ExpectedConditions.visibilityOf(element(_loginBtn)), browser.params.explicitWait, "loginBtn not present");
        browser.wait(ExpectedConditions.visibilityOf(element(_forgetPassBtn)), browser.params.explicitWait, "forgetPassBtn not present");

        return this;
    }

}