// This line defines a command
Cypress.Commands.add("login", (name, password) => {
    cy.get("input[formcontrolname='userName']").type(name);
    cy.get("input[formcontrolname='password']").type(password, {log: false}); // The "{log: false}" hides the result log in the tests, hiding sensitive information
    cy.get("button[type='submit']").click();
});

Cypress.Commands.add("registerAction", () => {
    cy.contains("a", "Register now").click();
    cy.contains("button", "Register").click();
});