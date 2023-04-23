/// <reference types = "Cypress" />

import properties from "../../_utils/properties/index";

const baseUrl = properties.baseUrl;

describe("DemoQA Web Site API Testing", () => {
  it("Add Book1 into User Collection", () => {
    cy.fixture("API Testing/LoginUser.json").then((user) => {
      const userId = user.userId;
      const accessToken = user.token;
      cy.fixture("API Testing/GoToBookStore.json").then((Books) => {
        cy.request({
          method: "POST",
          url: baseUrl + `/BookStore/v1/Books`,
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
          body: {
            userId: `${userId}`,
            collectionOfIsbns: [{ isbn: `${Books.books[0].isbn}` }],
          },
        }).then((response) => {
          cy.writeFile(
            "cypress/fixtures/API Testing/AddBooksToCollection.json",
            response.books + "\n\n",
            { append: true, flag: "a+" }
          );
          expect(response.status).to.eq(201);
        });
      });
    });
  });
  it("Add Book2 into User Collection", () => {
    cy.fixture("API Testing/LoginUser.json").then((user) => {
      const userId = user.userId;
      const accessToken = user.token;
      cy.fixture("API Testing/GoToBookStore.json").then((Books) => {
        cy.request({
          method: "POST",
          url: baseUrl + `/BookStore/v1/Books`,
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
          body: {
            userId: `${userId}`,
            collectionOfIsbns: [{ isbn: `${Books.books[1].isbn}` }],
          },
        }).then((response) => {
          cy.writeFile(
            "cypress/fixtures/API Testing/AddBooksToCollection.json",
            response + "\n\n",
            { append: true, flag: "a+" }
          );
          expect(response.status).to.eq(201);
        });
      });
    });
  });
  it("Add Book3 into User Collection", () => {
    cy.fixture("API Testing/LoginUser.json").then((user) => {
      const userId = user.userId;
      const accessToken = user.token;
      cy.fixture("API Testing/GoToBookStore.json").then((Books) => {
        cy.request({
          method: "POST",
          url: baseUrl + `/BookStore/v1/Books`,
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
          body: {
            userId: `${userId}`,
            collectionOfIsbns: [{ isbn: `${Books.books[2].isbn}` }],
          },
        }).then((response) => {
          cy.writeFile(
            "cypress/fixtures/API Testing/AddBooksToCollection.json",
            response + "\n\n",
            { append: true, flag: "a+" }
          );
          expect(response.status).to.eq(201);
        });
      });
    });
  });
  it("Add Book4 into User Collection", () => {
    cy.fixture("API Testing/LoginUser.json").then((user) => {
      const userId = user.userId;
      const accessToken = user.token;
      cy.fixture("API Testing/GoToBookStore.json").then((Books) => {
        cy.request({
          method: "POST",
          url: baseUrl + `/BookStore/v1/Books`,
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
          body: {
            userId: `${userId}`,
            collectionOfIsbns: [{ isbn: `${Books.books[3].isbn}` }],
          },
        }).then((response) => {
          cy.writeFile(
            "cypress/fixtures/API Testing/AddBooksToCollection.json",
            response + "\n\n",
            { append: true, flag: "a+" }
          );
          expect(response.status).to.eq(201);
        });
      });
    });
  });
  it("Add Book5 into User Collection", () => {
    cy.fixture("API Testing/LoginUser.json").then((user) => {
      const userId = user.userId;
      const accessToken = user.token;
      cy.fixture("API Testing/GoToBookStore.json").then((Books) => {
        cy.request({
          method: "POST",
          url: baseUrl + `/BookStore/v1/Books`,
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
          body: {
            userId: `${userId}`,
            collectionOfIsbns: [{ isbn: `${Books.books[4].isbn}` }],
          },
        }).then((response) => {
          cy.writeFile(
            "cypress/fixtures/API Testing/AddBooksToCollection.json",
            response + "\n\n",
            { append: true, flag: "a+" }
          );
          expect(response.status).to.eq(201);
        });
      });
    });
  });
  it("Add Book6 into User Collection", () => {
    cy.fixture("API Testing/LoginUser.json").then((user) => {
      const userId = user.userId;
      const accessToken = user.token;
      cy.fixture("API Testing/GoToBookStore.json").then((Books) => {
        cy.request({
          method: "POST",
          url: baseUrl + `/BookStore/v1/Books`,
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
          body: {
            userId: `${userId}`,
            collectionOfIsbns: [{ isbn: `${Books.books[5].isbn}` }],
          },
        }).then((response) => {
          cy.writeFile(
            "cypress/fixtures/API Testing/AddBooksToCollection.json",
            response + "\n\n",
            { append: true, flag: "a+" }
          );
          expect(response.status).to.eq(201);
        });
      });
    });
  });
  it("Add Book7 into User Collection", () => {
    cy.fixture("API Testing/LoginUser.json").then((user) => {
      const userId = user.userId;
      const accessToken = user.token;
      cy.fixture("API Testing/GoToBookStore.json").then((Books) => {
        cy.request({
          method: "POST",
          url: baseUrl + `/BookStore/v1/Books`,
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
          body: {
            userId: `${userId}`,
            collectionOfIsbns: [{ isbn: `${Books.books[6].isbn}` }],
          },
        }).then((response) => {
          cy.writeFile(
            "cypress/fixtures/API Testing/AddBooksToCollection.json",
            response + "\n\n",
            { append: true, flag: "a+" }
          );
          expect(response.status).to.eq(201);
        });
      });
    });
  });
  it("Add Book8 into User Collection", () => {
    cy.fixture("API Testing/LoginUser.json").then((user) => {
      const userId = user.userId;
      const accessToken = user.token;
      cy.fixture("API Testing/GoToBookStore.json").then((Books) => {
        cy.request({
          method: "POST",
          url: baseUrl + `/BookStore/v1/Books`,
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
          body: {
            userId: `${userId}`,
            collectionOfIsbns: [{ isbn: `${Books.books[7].isbn}` }],
          },
        }).then((response) => {
          cy.writeFile(
            "cypress/fixtures/API Testing/AddBooksToCollection.json",
            response + "\n\n",
            { append: true, flag: "a+" }
          );
          expect(response.status).to.eq(201);
        });
      });
    });
  });
});
