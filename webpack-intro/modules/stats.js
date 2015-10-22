var events = require('./events');
var people = require('./people');
var $ = require('../vendor/jquery');
var Mustache = require('../vendor/mustache');

var stats = {
  numPeople: 0,
  template: $('#stats-template').html(),
  stats: $('#statsModule'),

  init: function() {
    this.numPeople = people.peopleList.length;
    events.on('peopleChanged', this.setPeople.bind(this));
    this.render();
  },

  render: function() {
    this.stats.html(Mustache.render(this.template, {people: this.numPeople}));
  },
  setPeople: function(newPeople) {
      this.numPeople = newPeople;
      this.render();
  }
};

module.exports = stats;
