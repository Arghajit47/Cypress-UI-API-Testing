/// <reference types = "Cypress" />

import properties from "../../_utils/properties/index";

const baseUrl = properties.baseUrl;

describe("DemoQA Web Site API Testing", () => {
  it("Delete The Account", () => {
    cy.fixture("API Testing/LoginUser.json").then((user) => {
      const userId = user.userId;
      const accessToken = user.token;
      cy.request({
        method: "DELETE",
        url: baseUrl + `/Account/v1/User/${userId}`,
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      }).then((response) => {
        expect(response.status).to.eq(204);
      });
    });
  });
});
