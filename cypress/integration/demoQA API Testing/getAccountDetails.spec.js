/// <reference types = "Cypress" />

import properties from "../../_utils/properties/index";

const baseUrl = properties.baseUrl;

describe("DemoQA Web Site API Testing", () => {
  it("Get Account Details", () => {
    cy.fixture("API Testing/LoginUser.json").then((user) => {
      const userId = user.userId;
      const accessToken = user.token;
      cy.request({
        method: "GET",
        url: baseUrl + `/Account/v1/User/${userId}`,
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      }).then((response) => {
        cy.writeFile(
          "cypress/fixtures/API Testing/GetAccountDetails.json",
          response.body
        );
        expect(response.status).to.eq(200);
      });
    });
  });
});
