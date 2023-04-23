/// <reference types = "Cypress" />

import properties from "../../_utils/properties/index";

const baseUrl = properties.baseUrl;

describe("DemoQA Web Site API Testing", () => {
  it("Delete specific Book from Collection", () => {
    cy.fixture("API Testing/LoginUser.json").then((user) => {
      const userId = user.userId;
      const accessToken = user.token;
      cy.fixture("API Testing/GoToBookStore.json").then((Books) => {
        cy.request({
          method: "DELETE",
          url: baseUrl + `/BookStore/v1/Book`,
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
          body: {
            isbn: `${Books.books[0].isbn}`,
            userId: `${userId}`,
          },
        }).then((response) => {
          expect(response.status).to.eq(204);
        });
      });
    });
  });
});
