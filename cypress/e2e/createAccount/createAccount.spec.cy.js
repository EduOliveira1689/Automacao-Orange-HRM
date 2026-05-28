import CreateAccountPage from "../../pages/createAccountPage";
import candidateData from "../../fixtures/users/createUserData.json";

const createAccountPage = new CreateAccountPage();

afterEach(() => {
  cy.wait(3000);
});

describe("Create Account Tests", () => {
  it("Criar nova conta de usuário", () => {
    createAccountPage.accessSignupPage();
    createAccountPage.fillSignupForm();
    createAccountPage.fillAccountInformation(candidateData[0]);
    createAccountPage.submitCreateAccount();
    createAccountPage.validateAccountCreated();
  });
});
