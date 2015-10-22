var $ = require('../vendor/jquery');

var dom = {
  el: $('#peopleModule'),
  button: function() {
    return this.el.find('button');
  },
  input: function() {
    return this.el.find('input');
  },
  ul: function() {
    return this.el.find('ul');
  },
  template: $('#people-template').html(),
};

module.exports = dom;
