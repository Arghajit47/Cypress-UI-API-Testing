/* eslint-disable camelcase */
/* eslint-disable eqeqeq */
/* eslint-disable max-nested-callbacks */

import { BaseDependencies, BaseEyes, BaseHands } from "../BaseRobot";

export class DemoQAEyes extends BaseEyes {
  seesCardBody() {
    for (let i = 0; i < 6; i++) {
      this.seesDomWithIndex('div > div[class="card-body"]', i);
    }
  }
  seesleftpanelInElements() {
    for (let i = 0; i < 6; i++) {
      this.seesDomWithIndex('div > span[class="group-header"]', i);
    }
  }
  seesSubOptionsInElements() {
    for (let i = 0; i < 9; i++) {
      this.seesDomEnabled(`li[id="item-${i}"]`);
    }
  }
  seesTextBoxPage() {
    this.seesDomVisible(`input[id="userName"]`);
    this.seesDomVisible('input[id="userEmail"]');
    this.seesDomVisible('textarea[id="currentAddress"]');
    this.seesDomVisible('textarea[id="permanentAddress"]');
    this.seesDomEnabled('button[id="submit"]');
  }
  seesTextBoxResult(name: string, email: string, address: string) {
    this.seesDomContainTextValue('p[id="name"]', "Name:" + name);
    this.seesDomContainTextValue('p[id="email"]', "Email:" + email);
    this.seesDomContainTextValue(
      'p[id="currentAddress"]',
      "Current Address :" + address
    );
    this.seesDomContainTextValue(
      'p[id="permanentAddress"]',
      "Permananet Address :" + address
    );
  }
  seesSubOptionsInBooksStoreApplication() {
    for (let i = 0; i < 4; i++) {
      this.seesDomEnabled(`li[id="item-${i}"]`);
    }
  }
  seesLoginPage() {
    this.seesDomVisible('input[id="userName"]');
    this.seesDomVisible('input[id="password"]');
    this.seesDomVisible('button[id="login"]');
    this.seesDomVisible('button[id="newUser"]');
  }
  seesProfilePage(name: string) {
    this.seesDomVisible('input[id="searchBox"]');
    this.seesDomVisible('span[id="basic-addon2"]');
    this.seesDomContainText('label[id="userName-value"]', name);
    this.seesDomContainTextValue('button[id="submit"]', "Log out");
    this.seesDomWithIndex('button[id="submit"]', 1);
    this.seesDomWithIndex('button[id="submit"]', 2);
    this.seesDomEnabled('button[id="gotoStore"]');
    for (var i = 0; i < 5; i++) {
      this.seesDomWithIndex('div[role="columnheader"]', i);
    }
  }
  seesBookInfo(bookName: string, authorName: string, publisherName: string) {
    this.seesDomVisible('img[alt="image"]');
    this.seesDomContainText(`span[id="see-book-${bookName}"] > a`, bookName);
    this.seesDomContainText('div[role="gridcell"]', authorName);
    this.seesDomContainText('div[role="gridcell"]', publisherName);
  }
  seesBookDeleteIcon() {
    this.seesDomEnabled('span[id="delete-record-undefined"]');
  }
  seesBookStorePage(
    isbn: string,
    title: string,
    subTitle: string,
    author: string,
    publisher: string,
    pages: string,
    description: string,
    website: string
  ) {
    this.seesDomContainText('label[id="userName-value"]', isbn);
    this.seesDomContainText('label[id="userName-value"]', title);
    this.seesDomContainText('label[id="userName-value"]', subTitle);
    this.seesDomContainText('label[id="userName-value"]', author);
    this.seesDomContainText('label[id="userName-value"]', publisher);
    this.seesDomContainText('label[id="userName-value"]', pages);
    this.seesDomContainText('label[id="userName-value"]', description);
    this.seesDomContainText('label[id="userName-value"]', website);
    this.seesDomWithIndex('button[id="addNewRecordButton"]', 0);
    this.seesDomWithIndex('button[id="addNewRecordButton"]', 1);
  }
}

export class DemoQAHands extends BaseHands {
  clickOnElementsCatagory() {
    this.clickOnDomElementWithIndex('div > div[class="card-body"]', 0);
  }
  clickOnLeftPanelElementsCatagory() {
    this.clickOnDomElementWithIndex('div > span[class="group-header"]', 0);
  }
  clickOnTextBoxOption() {
    this.clickOnDomElementWithIndex('ul > li[id="item-0"]', 0);
  }
  inputAndSaveTextBoxPage(name: string, email: string, address: string) {
    this.typeTextonDom(`input[id="userName"]`, name);
    this.typeTextonDom('input[id="userEmail"]', email);
    this.typeTextonDom('textarea[id="currentAddress"]', address);
    this.typeTextonDom('textarea[id="permanentAddress"]', address);
    this.clickOnDomElement('button[id="submit"]');
  }
  clickOnLeftPanelBookStoreApplicationCatagory() {
    this.clickOnDomElementWithIndex('div > span[class="group-header"]', 5);
  }
  clickOnLoginOption() {
    this.clickOnDomElementWithIndex('ul > li[id="item-0"]', 5);
  }
  inputRequiredFieldsInLoginPage(name: string, password: string) {
    this.typeTextonDom('input[id="userName"]', name);
    this.typeTextonDom('input[id="password"]', password);
  }
  clickOnLoginButton() {
    this.clickOnDomElement('button[id="login"]');
  }
  clickOnGoToBookStoreButton() {
    this.clickOnDomElement('button[id="gotoStore"]');
  }
  clickOnBookInTable(bookName: string) {
    this.clickOnDomElement(`span[id="see-book-${bookName}"] > a`);
  }
  addBookIntoCollection() {
    this.clickOnDomElementWithIndex('button[id="addNewRecordButton"]', 1);
  }
}

export class DemoQADependencies extends BaseDependencies {}
