import loginData from "../../fixtures/users/loginData.json";
import LoginPage from "../../pages/loginPage";
import RecruitmentPage from "../../pages/recruitmentPage";

const loginPage = new LoginPage();
const recruitmentPage = new RecruitmentPage();

describe("Orange HRM Tests", () => {
  it("Criar usuário novo", () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(
      loginData.userSuccess.username,
      loginData.userSuccess.password,
    );
    loginPage.validateValidAccess();
    recruitmentPage.createNewCandidate();
    recruitmentPage.validateCandidateCreated();
  });
});
