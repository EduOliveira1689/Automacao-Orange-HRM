import CreateAccountPage from "../../pages/createAccountPage";
import candidateData from "../../fixtures/users/createUserData.json";

const createAccountPage = new CreateAccountPage();

describe("Automation Exercise Tests", () => {
  it("Criar nova conta de usuário", () => {
    createAccountPage.accessSignupPage();
    createAccountPage.fillSignupForm();
    createAccountPage.fillAccountInformation(candidateData[0]);
    createAccountPage.submitCreateAccount();
    createAccountPage.validateAccountCreated();
  });
});
