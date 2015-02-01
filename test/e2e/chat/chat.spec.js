'use strict';

describe('Chat View', function() {

  beforeEach(function() {
    browser.get('/');
  });

  it('should load the chat page', function() {
    var ele = by.id('chat');
    expect(browser.isElementPresent(ele)).toBe(true);
  });

  it('includes timestamp', function() {
    var ele = by.className('timestamp');
    expect(browser.isElementPresent(ele)).toBe(true);
  });

  it('includes edit button', function() {
    var ele = by.linkText('edit message');
    expect(browser.isElementPresent(ele)).toBe(true);
  });

  it('includes add message box', function() {
    var ele = by.className('chat-add');
    expect(browser.isElementPresent(ele)).toBe(true);
  });

  it('saves a message', function() {
    element(by.model('message.author')).sendKeys('Jon');
    element(by.model('message.content')).sendKeys('my message');
    element(by.buttonText('Save')).click();

    var elems = element.all(by.repeater('message in messages'));
    expect(elems.count()).toBe(15);
  });

  describe('edit messages', function() {
    beforeEach(function() {
      var elems = element.all(by.repeater('message in messages'));
      elems.first().then(function(elm) {
        elm.element(by.linkText('edit message')).click();
      })
    });

    it('shows edit box', function() {
      var ele = by.className('chat-edit');
      expect(browser.isElementPresent(ele)).toBe(true);
    });

    it('modifies the content', function() {
      element(by.model('message.content')).sendKeys('chocolate rain');
      element(by.buttonText('Save')).click();

      var elems = element.all(by.repeater('message in messages'));
      elems.first().then(function(elm) {
        elm.element(by.tagName('blockquote')).then(function(content) {
          expect(content.getText()).toEqual('chocolate rain');
        })
      })
    });
  });
  
});