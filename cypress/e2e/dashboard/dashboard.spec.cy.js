import loginData from "../../fixtures/users/loginData.json";
import LoginPage from "../../pages/loginPage";
import DashboardPage from "../../pages/dashboardPage";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

describe("Orange HRM Tests", () => {
  it("Pagina Dashboard", () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(
      loginData.userSuccess.username,
      loginData.userSuccess.password,
    );
    loginPage.ValidateValidAccess();

    dashboardPage.validateDashboardPage();
  });
});
