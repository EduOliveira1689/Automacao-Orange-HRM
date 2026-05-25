class LoginPage {
  selectorsList() {
    const selectors = {
      usernameField: "[name='username']",
      passwordField: "[name='password']",
      loginButton: "[type='submit']",
      wrongCredentialAlert: "[role='alert']",
      sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
      dashboardGrid: ".orangehrm-dashboard-grid",
    };

    return selectors;
  }

  accessLoginPage() {
    cy.visit("/auth/login");
  }

  loginWithUser(username, password) {
    cy.get(this.selectorsList().usernameField).type(username);
    cy.get(this.selectorsList().passwordField).type(password);
    cy.get(this.selectorsList().loginButton).click();
  }

  ValidateValidAccess() {
    cy.get(this.selectorsList().dashboardGrid).should("be.visible");
  }

  ValidateInvalidAccess() {
    cy.get(this.selectorsList().wrongCredentialAlert).should(
      "contain",
      "Invalid credentials",
    );
  }
}

export default LoginPage;
