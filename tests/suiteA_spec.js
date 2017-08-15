import MainPage from "../pages/main.page";

describe('Suite A', () => {

  it("Test 1", () => {
    new MainPage().open()
    .navigateToLogin();
  })

  it("Test 2", () => {
    new MainPage().open()
    .navigateToLogin();
  })

});
