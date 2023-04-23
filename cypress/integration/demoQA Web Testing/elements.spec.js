/* eslint-disable camelcase */
/* eslint-disable eqeqeq */
/* eslint-disable max-nested-callbacks */

/// <reference types = "Cypress" />

import properties from "../../_utils/properties/index";
import {
  DemoQAEyes,
  DemoQAHands,
  DemoQADependencies,
} from "../../robots/CommonRobots/demoQARobot";

const demoQaHands = new DemoQAHands();
const demoQaEyes = new DemoQAEyes();
const demoQadependencies = new DemoQADependencies();
const baseUrl = properties.baseUrl;
const fullName = properties.FullName;
const email = properties.Email;
const address = "122 K.B. Lane Hillbasti, Raniganj";

describe("UI Testing for DemoQA Website", () => {
  beforeEach("Visit DemoQA Website", () => {
    demoQadependencies.visitUrl(baseUrl);
  });
  it("Click on Elements & test the elements", () => {
    demoQaEyes.seesCardBody();
    demoQaHands.clickOnElementsCatagory();
    demoQaEyes.seesleftpanelInElements();
    demoQaHands.clickOnLeftPanelElementsCatagory();
    demoQaEyes.seesSubOptionsInElements();
    demoQaHands.clickOnTextBoxOption();
    demoQaHands.inputAndSaveTextBoxPage(fullName, email, address);
    demoQaEyes.seesTextBoxResult(fullName, email, address);
  });
});
