/// <reference types = "Cypress" />

import properties from "../../_utils/properties/index";

const baseUrl = properties.baseUrl;
const password = properties.Password;
const userName = properties.UserName;

describe("DemoQA Web Site API Testing", () => {
  it("Create New User", () => {
    cy.request({
      method: "POST",
      url: baseUrl + "/Account/v1/User",
      body: {
        userName: `${userName}`,
        password: `${password}`,
      },
    }).then((response) => {
      cy.writeFile(
        "cypress/fixtures/API Testing/createNewUser.json",
        response.body
      );
      expect(response.status).to.eq(201);
    });
  });
});
