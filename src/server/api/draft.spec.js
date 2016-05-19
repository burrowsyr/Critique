'use strict';

var Draft = require('./draft');

describe('Draft', function() {
  it('method1 should return 0', function() {
    var draft = new Draft();
    expect(draft.method1()).to.equal(0);
  });
});
