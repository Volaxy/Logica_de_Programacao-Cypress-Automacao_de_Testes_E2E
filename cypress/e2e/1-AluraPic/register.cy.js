describe("Register in the Alurapic website", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    // No fields have been filled
    it("Verify Validation Message", () => {
        cy.registerAction();
        cy.contains("small", "Email is required!").should("be.visible");
        
        cy.contains("button", "Register").click();
        cy.contains("small", "Full name is required!").should("be.visible");
        cy.contains("small", "User name is required!").should("be.visible");
        cy.contains("small", "Password is required!").should("be.visible");
    });

    // Invalid "Email" field
    it("Verify Invalid Email Message", () => {
        cy.registerAction();
        
        cy.get("input[formcontrolname='email']").type("jackob");
        cy.contains("small", "Invalid e-mail").should("be.visible");
    });
    
    // Invalid "Full name" field
    it("Verify Invalid Full name", () => {
        cy.registerAction();

        cy.get("input[formcontrolname='fullName']").type("a");
        cy.contains("button", "Register").focus();
        cy.contains("small", "Mininum length is 2").should("be.visible");
    });

    // Invalid "User name" field
    it("Verify Invalid User name", () => {
        cy.registerAction();

        cy.get("input[formcontrolname='userName']").type("a");
        cy.contains("button", "Register").focus();
        cy.contains("small", "Mininum length is 2").should("be.visible");
    });

    // Invalid "User name" field with a CAPITAL letter
    it("Verify Invalid User name with a CAPITAL Letter", () => {
        cy.registerAction();

        cy.get("input[formcontrolname='userName']").type("Username");
        cy.contains("button", "Register").focus();
        cy.contains("small", "Must be lower case").should("be.visible");
    });

    // Invalid "Password" field
    it("Verify Invalid Password field", () => {
        cy.registerAction();

        cy.get("input[formcontrolname='password']").type("123");
        cy.contains("button", "Register").focus();
        cy.contains("small", "Mininum length is 8").should("be.visible");
    });

    // Register New User
    const users = require("../../fixtures/users.json");
    users.forEach(user => {
        it.only(`Register new user: ${user.userName}`, () => {
            cy.contains("a", "Register now").click();
            cy.contains("button", "Register").click();
            
            cy.get("input[formcontrolname='email'").type(user.email);
            cy.get("input[formcontrolname='fullName'").type(user.fullName);
            cy.get("input[formcontrolname='userName'").type(user.userName);
            cy.get("input[formcontrolname='password'").type(user.password);
    
            cy.contains("button", "Register").click();
        });
    });
});