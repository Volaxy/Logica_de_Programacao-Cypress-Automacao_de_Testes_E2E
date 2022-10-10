/// <reference types="cypress" />

describe("Registration and Login in the Alurapic website", () => {
    beforeEach(() => {
        cy.visit("https://alura-fotos.herokuapp.com");
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

    // Login with invalid username
    // To test only some tests, put the ".only" after the "it"
    it("Login with a Invalid username", () => {
        cy.login("test", "1234");

        cy.on("window:alert", (str) => {
            expect(str).to.equal("Invalid user name or password");
        });
    });

    // Login with a valid username
    it("Login with a Invalid username", () => {
        cy.login("flavio", "123");

        cy.contains("a", "(Logout)").should("be.visible");
    });
});