/// <reference types = "Cypress" />

import properties from "../../_utils/properties/index";

const baseUrl = properties.baseUrl;
const password = properties.Password;
const userName = properties.UserName;

describe("DemoQA Web Site API Testing", () => {
  it("Login User", () => {
    cy.fixture("API Testing/LoginNewUser.json").then((user) => {
      const accessToken = user.token;
      cy.request({
        method: "POST",
        url: baseUrl + "/Account/v1/Login",
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
        body: {
          userName: userName,
          password: password,
        },
      }).then((response) => {
        cy.writeFile(
          "cypress/fixtures/API Testing/LoginUser.json",
          response.body
        );
        expect(response.status).to.eq(200);
      });
    });
  });
});
