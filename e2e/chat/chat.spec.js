'use strict';

describe('Chat View', function() {
  var page;

  beforeEach(function() {
    browser.get('/');
    page = require('./chat.po');
  });

  it('should show add message form', function() {
    expect(page.addTitle.getText()).toBeDefined();
  });

  it('should show messages', function() {
    expect(page.messages).toBeGreaterThan(0);
  });

  it('should show message authors', function() {
    expect(page.authors).toEqual(page.messages);
  });

  it('should show message timestamps', function() {
    expect(page.timestamps).toEqual(page.messages);
  });

  it('should add message on save', function() {
    page.addFormAuthor.sendKeys('Jon');
    page.addFormContent.sendKeys('sawp every1');
    page.addFormSubmit.click();
  });

  it('should show edit button', function() {

  });

  it('should show edit form on button click', function() {

  });

  it('should update correct message when editing', function() {

  });
});