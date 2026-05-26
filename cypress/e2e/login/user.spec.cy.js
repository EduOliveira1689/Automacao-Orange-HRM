import loginData from "../../fixtures/users/loginData.json";
import LoginPage from "../../pages/loginPage";

const loginPage = new LoginPage();

describe("Orange HRM Tests", () => {
  it("Login com credenciais validas", () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(
      loginData.userSuccess.username,
      loginData.userSuccess.password,
    );
    loginPage.validateValidAccess();
  });

  it("Login com credenciais invalidas", () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(
      loginData.userFail.username,
      loginData.userFail.password,
    );
    loginPage.validateInvalidAccess();
  });
});
