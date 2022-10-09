/// <reference types="cypress" />

describe("Registration and Login in the Alurapic website", () => {
    beforeEach(() => {
        cy.visit("https://alura-fotos.herokuapp.com");
    });

    // No fields have been filled
    it("Verify Validation Message", () => {
        cy.contains("a", "Register now").click();
        cy.contains("button", "Register").click();
        cy.contains("small", "Email is required!").should("be.visible");
        
        cy.contains("button", "Register").click();
        cy.contains("small", "Full name is required!").should("be.visible");
        cy.contains("small", "User name is required!").should("be.visible");
        cy.contains("small", "Password is required!").should("be.visible");
    });

    // Invalid "Email" field
    it("Verify Invalid Email Message", () => {
        cy.contains("a", "Register now").click();
        cy.contains("button", "Register").click();
        
        cy.get("input[formcontrolname='email']").type("jackob");
        cy.contains("small", "Invalid e-mail").should("be.visible");
    });
    
    // Invalid "Full name" field
    it("Verify Invalid Full name", () => {
        cy.contains("a", "Register now").click();
        cy.contains("button", "Register").click();

        cy.get("input[formcontrolname='fullName']").type("a");
        cy.contains("button", "Register").focus();
        cy.contains("small", "Mininum length is 2").should("be.visible");
    });

    // Invalid "User name" field
    it("Verify Invalid User name", () => {
        cy.contains("a", "Register now").click();
        cy.contains("button", "Register").click();

        cy.get("input[formcontrolname='userName']").type("a");
        cy.contains("button", "Register").focus();
        cy.contains("small", "Mininum length is 2").should("be.visible");
    });

    // Invalid "User name" field with a CAPITAL letter
    it("Verify Invalid User name with a CAPITAL Letter", () => {
        cy.contains("a", "Register now").click();
        cy.contains("button", "Register").click();

        cy.get("input[formcontrolname='userName']").type("Username");
        cy.contains("button", "Register").focus();
        cy.contains("small", "Must be lower case").should("be.visible");
    });

    // Invalid "Password" field
    it("Verify Invalid Password field", () => {
        cy.contains("a", "Register now").click();
        cy.contains("button", "Register").click();

        cy.get("input[formcontrolname='password']").type("123");
        cy.contains("button", "Register").focus();
        cy.contains("small", "Mininum length is 8").should("be.visible");
    });
});