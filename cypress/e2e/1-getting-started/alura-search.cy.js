describe("alura search courses", () => {
    beforeEach(() => {
        cy.visit("https://www.alura.com.br");
    });
    // Search "Python" in the Input
    it("Search Python course", () => {
        cy.get('#header-barraBusca-form-campoBusca').type("python");
        cy.get('.header-barraBusca-form-submit').click();
        
        cy.get('h4.busca-resultado-nome')
            .should("contain", "Formação Python  e orientação a objetos")
    });

    // Search "Java" in the input
    it("Search Java course", () => {
        cy.get('#header-barraBusca-form-campoBusca').type("Java");
        cy.get('.header-barraBusca-form-submit').click();

        cy.get('h4.busca-resultado-nome')
            .should("contain", "Formação Certificação Java");
    });
});