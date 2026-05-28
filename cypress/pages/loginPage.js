class LoginPage {
  selectorsList() {
    const selectors = {
      usernameField: "[data-qa='login-email'][placeholder='Email Address']",
      passwordField: "[data-qa='login-password']",
      loginButton: "[data-qa='login-button']",
    };

    return selectors;
  }

  accessLoginPage() {
    cy.visit("/login");
  }

  loginWithUser(username, password) {
    cy.get(this.selectorsList().usernameField).type(username);
    cy.get(this.selectorsList().passwordField).type(password);
    cy.get(this.selectorsList().loginButton).click();
  }

  submitLogin() {
    cy.get(this.selectorsList().loginButton).click();
  }

  validateValidAccess() {
    cy.contains("Logged in as").should("be.visible");
  }

  validateInvalidAccess() {
    cy.contains("Your email or password is incorrect!").should("be.visible");
  }

  validateEmptyAccess() {
    cy.get(this.selectorsList().usernameField).then(($input) => {
      expect($input[0].validationMessage).to.contain("Preencha este campo.");
    });
  }
}

export default LoginPage;
