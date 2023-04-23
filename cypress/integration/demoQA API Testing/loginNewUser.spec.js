/* eslint-disable camelcase */
/* eslint-disable eqeqeq */
/* eslint-disable max-nested-callbacks */

/// <reference types = "Cypress" />

import properties from "../../_utils/properties/index";
import {
  DemoQAHands,
  DemoQADependencies,
} from "../../robots/CommonRobots/demoQARobot";

const demoQaHands = new DemoQAHands();
const demoQadependencies = new DemoQADependencies();
const baseUrl = properties.baseUrl;
const password = properties.Password;
const userName = properties.UserName;

describe("UI Testing for DemoQA Website", () => {
  beforeEach("Visit DemoQA Website", () => {
    demoQadependencies.visitUrl(baseUrl);
  });
  it("Click on Book Store Application & test the Functionalities", () => {
    demoQaHands.clickOnElementsCatagory();
    demoQaHands.clickOnLeftPanelBookStoreApplicationCatagory();
    demoQaHands.clickOnLoginOption();
    demoQaHands.inputRequiredFieldsInLoginPage(userName, password);
    cy.intercept("POST", baseUrl + "/Account/v1/Login").as("graphqlRequest");
    demoQaHands.clickOnLoginButton();
    cy.wait("@graphqlRequest", { timeout: 80000 }).then(({ response }) => {
      cy.writeFile(
        "cypress/fixtures/API Testing/LoginNewUser.json",
        response.body
      );
      if (response?.body.userId == null) {
        cy.log("API Failiure: " + response.statusCode);
      } else {
        cy.log("API Success: " + response.statusCode);
      }
    });
  });
});
