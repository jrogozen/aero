'use strict';

var Page = function() {
  this.addTitle = element(by.css('.add'));
  this.messages = element.all(by.css('.message')).count();
  this.authors = element.all(by.css('.author')).count();
  this.timestamps = element.all(by.css('.timestamp')).count();
  this.addFormAuthor = element(by.css('.add-message-author'));
  this.addFormContent = element(by.css('.add-message-content'));
  this.addFormSubmit = element(by.css('.save-message'));
};

module.exports = new Page();