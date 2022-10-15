/// <reference types="cypress" />

describe("Search Photos and Data", () => {
    it("Search Flavio Photos", () => {
        cy.request({
            method: "GET",
            url: "https://apialurapic.herokuapp.com/flavio/photos"
        }).then((res) => {
            expect(res.status).to.be.equal(200);
            expect(res.body).is.not.empty;
            expect(res.body[0]).to.have.property("description");
            expect(res.body[0].description).to.be.equal("Farol iluminado");
        });
    });
    
    // Test response time
    // This is an exemple of flaky test
    it("Search Flavio Photos", () => {
        const expectedTime = Math.random() * 6000;

        cy.request({
            method: "GET",
            url: "https://apialurapic.herokuapp.com/flavio/photos"
        }).then((res) => {
            expect(res.status).to.be.equal(200);
            expect(res.body).is.not.empty;
            expect(res.body[0]).to.have.property("description");
            expect(res.body[0].description).to.be.equal("Farol iluminado");

            // This line verify if the response time is less than ("lte" function) the expected time
            expect(res.duration).to.be.lte(expectedTime);
        });
    });
});