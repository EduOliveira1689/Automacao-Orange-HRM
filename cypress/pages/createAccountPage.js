import { faker } from "@faker-js/faker";

class CreateAccountPage {
  selectorsList() {
    const selectors = {
      signupNameField: "[data-qa='signup-name']",
      signupEmailField: "[data-qa='signup-email']",
      signupButton: "[data-qa='signup-button']",

      titleMr: "#id_gender1",
      titleMrs: "#id_gender2",

      signupPasswordField: "[data-qa='password']",

      signupDaySelect: "[data-qa='days']",
      signupMonthSelect: "[data-qa='months']",
      signupYearSelect: "[data-qa='years']",

      newsletterCheckbox: "#newsletter",
      offersCheckbox: "#optin",

      signupFirstNameField: "[data-qa='first_name']",
      signupLastNameField: "[data-qa='last_name']",
      signupCompanyField: "[data-qa='company']",

      signupAddressField: "[data-qa='address']",
      signupAddress2Field: "[data-qa='address2']",

      signupCountryField: "[data-qa='country']",
      signupStateField: "[data-qa='state']",
      signupCityField: "[data-qa='city']",
      signupZipcodeField: "[data-qa='zipcode']",
      signupMobileNumberField: "[data-qa='mobile_number']",

      createAccountButton: "[data-qa='create-account']",

      accountCreatedMessage: "[data-qa='account-created']",
    };

    return selectors;
  }

  accessSignupPage() {
    cy.visit("/login");
  }

  fillSignupForm() {
    const randomEmail = faker.internet.email();

    cy.get(this.selectorsList().signupNameField).type(faker.person.fullName());

    cy.get(this.selectorsList().signupEmailField).type(randomEmail);

    cy.get(this.selectorsList().signupButton).click();
  }

  fillAccountInformation(candidateData) {
    cy.get(this.selectorsList().titleMr).click();

    cy.get(this.selectorsList().signupPasswordField).type(
      candidateData.password,
    );

    cy.get(this.selectorsList().signupDaySelect).select(candidateData.day);
    cy.get(this.selectorsList().signupMonthSelect).select(candidateData.month);
    cy.get(this.selectorsList().signupYearSelect).select(candidateData.year);
    cy.get(this.selectorsList().newsletterCheckbox).click();
    cy.get(this.selectorsList().offersCheckbox).click();
    cy.get(this.selectorsList().signupFirstNameField).type(
      candidateData.firstName,
    );
    cy.get(this.selectorsList().signupLastNameField).type(
      candidateData.lastName,
    );
    cy.get(this.selectorsList().signupAddressField).type(candidateData.address);
    cy.get(this.selectorsList().signupCountryField).select(
      candidateData.country,
    );
    cy.get(this.selectorsList().signupStateField).type(candidateData.state);
    cy.get(this.selectorsList().signupCityField).type(candidateData.city);
    cy.get(this.selectorsList().signupZipcodeField).type(candidateData.zipcode);
    cy.get(this.selectorsList().signupMobileNumberField).type(
      candidateData.mobileNumber,
    );
  }

  submitCreateAccount() {
    cy.get(this.selectorsList().createAccountButton).click();
  }

  validateAccountCreated() {
    cy.get(this.selectorsList().accountCreatedMessage).should(
      "contain",
      "Account Created!",
    );
  }
}

export default CreateAccountPage;
