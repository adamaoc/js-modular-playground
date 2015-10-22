var events = require('./events');
var dom = require('./dom');
var $ = require('../vendor/jquery');
var Mustache = require('../vendor/mustache');

var people = {

  peopleList: ['Will', 'Steve'],

  init: function() {
    dom.button().on('click', this.addPerson.bind(this));
    dom.ul().delegate('i.del', 'click', this.deletePerson.bind(this));
    this.render();
  },

  addPerson: function(value) {
      var name = (typeof value === "string") ? value : dom.input().val();
      this.peopleList.push(name);
      this.render();
      dom.input().val('');
  },

  deletePerson: function(event) {
      var i;
      if (typeof event === "number") {
          i = event;
      } else {
          var $remove = $(event.target).closest('li');
          i = dom.ul().find('li').index($remove);
      }
      this.peopleList.splice(i, 1);
      this.render();
  },

  render: function() {
    dom.ul().html(Mustache.render(dom.template, {people: this.peopleList}));
    events.emit("peopleChanged", this.peopleList.length);
  }

};

module.exports = people;
