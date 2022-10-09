// The describe show the test name, and the execution of the test
describe("alura search courses", () => {
    // This function "beforeEach" will be executed before each test inside the "it"
    beforeEach(() => {
        // The "cy.visit" enter with the URL to access some site
        cy.visit("https://www.alura.com.br");
    });

    // The "it" performs a test with a description and the function that will be executed
    it("Search Python course", () => {
        // The "get" get the element in the DOM
        // The "type" write something in the HTML element

        /**
         * TIP
         * To get an element in the DOM, click in the target icon on the left of the URL in the URL, then click on the HTML element to be grab it
         */
        cy.get('#header-barraBusca-form-campoBusca').type("python");
        cy.get('.header-barraBusca-form-submit').click();

        // cy.get(':nth-child(3) > .busca-resultado-link > .busca-resultado-container > .busca-resultado-nome')
            // The "should" verify if the condition is true or false
            // The "have.text" verify if the text is equal to the second argument
            // .should("have.text", "Formação Python  e orientação a objetos")
        
        cy.get('h4.busca-resultado-nome')
            // The "contain" verify if the text is inside the element texts
            .should("contain", "Formação Python  e orientação a objetos")
    });

    it("Search Java course", () => {
        cy.get('#header-barraBusca-form-campoBusca').type("Java");
        cy.get('.header-barraBusca-form-submit').click();

        cy.get('h4.busca-resultado-nome')
            .should("contain", "Formação Certificação Java");
    });
});