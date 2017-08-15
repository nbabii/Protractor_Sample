import MainPage from "../pages/main.page";

describe('Suite A', () => {

  it("Test Main Page Availability", () => {
    const isMainAvailable = MainPage.open().isPageAvailable;
    expect(isMainAvailable).toBeTruthy();
  })

  it("Test Login Page Availability", () => {
    const isLoginAvailable = MainPage.open()
      .navigateToLogin().isPageAvailable;
    expect(isLoginAvailable).toBeTruthy();
  })

});
