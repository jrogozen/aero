'use strict';

describe('Users View', function() {

  beforeEach(function() {
    browser.get('/#/users');
  });

  it('should list users', function() {
    var elems = element.all(by.repeater('user in users'));
    expect(elems.count()).toBe(6);
  });

  it('shows user image', function() {
    var elems = element.all(by.repeater('user in users'));
    elems.first().then(function(elm) {
      elm.element(by.tagName('img')).then(function(image) {
        expect(image.getAttribute('src')).toMatch('gravatar.com');
      });
    });
  });

  describe('User Messages', function() {

    beforeEach(function() {
     var elems = element.all(by.repeater('user in users'));
      elems.first().then(function(elm) {
        elm.element(by.binding('user.name')).click();
      }); 
    });

    it("should show a user's messages on click", function() {
      var ele = by.className('user-messages');
      expect(browser.isElementPresent(ele)).toBe(true);
    });

  });
});