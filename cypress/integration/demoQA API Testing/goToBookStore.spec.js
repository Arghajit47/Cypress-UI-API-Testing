/// <reference types = "Cypress" />

import properties from "../../_utils/properties/index";

const baseUrl = properties.baseUrl;

describe("DemoQA Web Site API Testing", () => {
  it("Go To Book Store", () => {
    cy.fixture("API Testing/LoginUser.json").then((user) => {
      const accessToken = user.token;
      cy.request({
        method: "GET",
        url: baseUrl + `/BookStore/v1/Books`,
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      }).then((response) => {
        cy.writeFile(
          "cypress/fixtures/API Testing/GoToBookStore.json",
          response.body
        );
        expect(response.status).to.eq(200);
      });
    });
  });
});

// for (var i = 0; i < 8; i++) {
//   var book = user.book[i];
// }
