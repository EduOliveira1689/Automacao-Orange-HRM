class DashboardPage {
  selectorsList() {
    const selectors = {
      dashboardButton: "[href='/web/index.php/dashboard/index']",
    };

    return selectors;
  }
  validateDashboardPage() {
    cy.url().should("include", "/dashboard");
    cy.contains("Dashboard").should("be.visible");
  }
}

export default DashboardPage;
