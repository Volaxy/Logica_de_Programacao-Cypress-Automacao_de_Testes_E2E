describe("Login in the Alurapic website", () => {
    beforeEach(() => {
        cy.visit("/");

        // This line, identify the method to be intercept, the URL, and the parameters
        cy.intercept("POST", "https://apialurapic.herokuapp.com/user/login", {
            statusCode: 400,
        }).as("stubPost"); // This is a alias to the intercept function
    });

    // Login with invalid username
    it("Login with a Invalid username", () => {
        cy.login("test", "1234");

        cy.on("window:alert", (str) => {
            expect(str).to.equal("Invalid user name or password");
        });
    });

    // Login with a valid username
    it("Login with a Invalid username", () => {
        cy.login(Cypress.env("userName"), Cypress.env("password"));

        // The "wait()" references the intercepetion placing the "@" before the intercept name
        cy.wait("@stubPost");

        cy.contains("a", "(Logout)").should("be.visible");
    });

    // Login with Flavio
    it("Login with Flavio", () => {
        cy.request({
            method: "POST",
            url: "https://apialurapic.herokuapp.com/user/login",
            body: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200);
            expect(res.body).is.not.empty;
            expect(res.body).to.have.property("id");
            expect(res.body.id).to.be.equal(1);
        });
    });
});