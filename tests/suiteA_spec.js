import MainPage from "../pages/main.page";

describe('Suite A', () => {

/*   it("Test Main Page Availability", () => {
    const isMainAvailable = MainPage.open().isPageAvailable;
    expect(isMainAvailable).toBeTruthy();
  })

  it("Test Login Page Availability", () => {
    const isLoginAvailable = MainPage.open()
      .navigateToLogin().isPageAvailable;
    expect(isLoginAvailable).toBeTruthy();
  }) */

    it("Test Login Page filling form", () => {
    const errMsg = MainPage.open()
      .navigateToLogin()
      .loginAsWrongUser("test_test", "pass_test");
    expect(errMsg).toBe("Invalid Email or Password");    
  })

});
