import { faker } from "@faker-js/faker";
import candidateData from "../fixtures/users/createUserData.json";

class RecruitmentPage {
  selectorsList() {
    const selectors = {
      recruitmentButton:
        "[href='/web/index.php/recruitment/viewRecruitmentModule']",
      firstName: '[name="firstName"]',
      middleName: '[name="middleName"]',
      lastName: '[name="lastName"]',
      vacancy: ".oxd-select-text--after > .oxd-icon",
      emailField: 'input[placeholder="Type here"]',
      contactNumberField: 'input[placeholder="Type here"]',
      applicationDateField: '[placeholder="yyyy-dd-mm"]',
      checkBoxIcon: ".oxd-checkbox-input",
      saveButton: "[type='submit']",
    };

    return selectors;
  }

  createNewCandidate() {
    // =========================
    // Dados Faker
    // =========================

    const firstName = faker.person.firstName();
    const middleName = faker.person.middleName();
    const lastName = faker.person.lastName();

    // =========================
    // Dados JSON
    // =========================

    const randomCandidate =
      candidateData.candidates[
        Math.floor(Math.random() * candidateData.candidates.length)
      ];

    // =========================
    // Data aleatória
    // =========================

    const randomDay = String(Math.floor(Math.random() * 28) + 1).padStart(
      2,
      "0",
    );

    const randomMonth = String(Math.floor(Math.random() * 12) + 1).padStart(
      2,
      "0",
    );

    const randomYear = 2025;

    const applicationDate = `${randomYear}-${randomDay}-${randomMonth}`;

    // =========================
    // Fluxo Recruitment
    // =========================

    cy.get(this.selectorsList().recruitmentButton).click();

    cy.contains("button", "Add").click();

    // =========================
    // Nome
    // =========================

    cy.get(this.selectorsList().firstName).should("be.visible").type(firstName);

    cy.get(this.selectorsList().middleName)
      .should("be.visible")
      .type(middleName);

    cy.get(this.selectorsList().lastName).should("be.visible").type(lastName);

    // =========================
    // Vacancy aleatória
    // =========================

    cy.get(this.selectorsList().vacancy).click();

    cy.get(".oxd-select-option").then((options) => {
      const randomIndex = Math.floor(Math.random() * options.length);

      cy.wrap(options[randomIndex]).click();
    });

    // =========================
    // Email
    // =========================

    cy.get(this.selectorsList().emailField)
      .eq(0)
      .should("be.visible")
      .and("not.be.disabled")
      .type(randomCandidate.email)
      .should("have.value", randomCandidate.email);

    // =========================
    // Contact Number
    // =========================

    cy.get(this.selectorsList().contactNumberField)
      .eq(1)
      .should("be.visible")
      .and("not.be.disabled")
      .type(randomCandidate.contactNumber)
      .should("have.value", randomCandidate.contactNumber);

    // =========================
    // Application Date
    // =========================

    cy.get(this.selectorsList().applicationDateField)
      .clear()
      .type(applicationDate);

    cy.get(this.selectorsList().checkBoxIcon).click();

    // =========================
    // Save
    // =========================

    cy.get(this.selectorsList().saveButton).click();
  }

  validateCandidateCreated() {
    cy.contains("Successfully Saved", {
      timeout: 10000,
    }).should("be.visible");
  }
}

export default RecruitmentPage;
