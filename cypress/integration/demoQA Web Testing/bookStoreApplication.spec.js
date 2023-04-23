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
const password = properties.Password;
const userName = properties.UserName;

describe("UI Testing for DemoQA Website", () => {
  beforeEach("Visit DemoQA Website", () => {
    demoQadependencies.visitUrl(baseUrl);
  });
  it("Click on Book Store Application & test the Functionalities", () => {
    demoQaEyes.seesCardBody();
    demoQaHands.clickOnElementsCatagory();
    demoQaEyes.seesleftpanelInElements();
    demoQaHands.clickOnLeftPanelBookStoreApplicationCatagory();
    demoQaEyes.seesSubOptionsInBooksStoreApplication();
    demoQaHands.clickOnLoginOption();
    demoQaEyes.seesLoginPage();
    demoQaHands.inputRequiredFieldsInLoginPage(userName, password);
    cy.intercept("POST", baseUrl + "/Account/v1/Login").as("graphqlRequest");
    demoQaHands.clickOnLoginButton();
    cy.wait("@graphqlRequest", { timeout: 80000 }).then(({ response }) => {
      const userId = response?.body.userId;
      if (response?.body.userId == null) {
        cy.log("API Failiure: " + response.statusCode);
      } else {
        cy.intercept("GET", baseUrl + `/Account/v1/User/${userId}`).as(
          "graphqlRequest"
        );
        cy.wait("@graphqlRequest", { timeout: 80000 }).then(({ response }) => {
          const isbn = response?.body.books[0].isbn;
          const title = response?.body.books[0].title;
          const authorName = response?.body.books[0].author;
          const publisherName = response?.body.books[0].publisher;
          cy.log(isbn);
          demoQaEyes.seesProfilePage(userName);
          demoQaEyes.seesBookInfo(title, authorName, publisherName);
          demoQaEyes.seesBookDeleteIcon();
          cy.intercept("GET", baseUrl + "/BookStore/v1/Books").as(
            "graphqlRequest"
          );
          demoQaHands.clickOnGoToBookStoreButton();
          cy.wait("@graphqlRequest", { timeout: 80000 }).then(
            ({ response }) => {
              cy.writeFile(
                "cypress/fixtures/Books- UITesting/AllBooks.json",
                response.body
              );
              cy.fixture("Books- UITesting/AllBooks.json").then((book) => {
                for (var c = 0; c < book.books.length; c++) {
                  cy.log(book.books[c].title);
                  cy.log(book.books[c].author);
                  cy.log(book.books[c].publisher);
                  demoQaEyes.seesBookInfo(
                    book.books[c].title,
                    book.books[c].author,
                    book.books[c].publisher
                  );
                  cy.wait(2000);
                }
              });
              cy.fixture("Books/AllBooks.json").then((book) => {
                cy.intercept(
                  "GET",
                  baseUrl + `/books?book=${book.books[1].isbn}`
                ).as("graphqlRequest");
                demoQaHands.clickOnBookInTable(book.books[1].title);
                cy.wait("@graphqlRequest", { timeout: 80000 }).then(() => {
                  demoQaEyes.seesBookStorePage(
                    book.books[1].isbn,
                    book.books[1].title,
                    book.books[1].subTitle,
                    book.books[1].author,
                    book.books[1].publisher,
                    book.books[1].pages,
                    book.books[1].description,
                    book.books[1].website
                  );
                  cy.intercept("POST", baseUrl + "/BookStore/v1/Books").as(
                    "graphqlRequest"
                  );
                  demoQaHands.addBookIntoCollection();
                  cy.wait("@graphqlRequest", { timeout: 80000 }).then(
                    ({ response }) => {
                      if (response.statusCode == 200) {
                        cy.on("window:confirm", (txt) => {
                          expect(txt).to.contains(
                            "Book added to your collection."
                          );
                        });
                      } else {
                        cy.on("window:confirm", (txt) => {
                          expect(txt).to.contains("Unauthorized User");
                        });
                      }
                    }
                  );
                });
              });
            }
          );
        });
      }
    });
  });
});
