describe("Orange HRM Tests", () => {
  it("Login com credenciais validas", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
    cy.get('[name="username"]').type("Admin");
    cy.get('[name="password"]').type("admin123");
    cy.get("button[type='submit']").click();
    cy.location("pathname").should("equal", "/web/index.php/dashboard/index");
    cy.get(".oxd-topbar-header-breadcrumb > .oxd-text").contains("Dashboard");
  });

  it("Login com credenciais invalidas", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
    cy.get('[name="username"]').type("Admin");
    cy.get('[name="password"]').type("admin123456");
    cy.get("button[type='submit']").click();
    cy.get("[role='alert']").should("contain", "Invalid credentials");
  });
});
