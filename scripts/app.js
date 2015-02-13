'use strict';

require('../styles/styles.css');

var React = require('react');
var Quote = require('./quote');
var Quotes = require('./quotes');
var Logo = require('./logo');

var App = React.createClass({

  getInitialState: function () {
    return {
        randomQuote: Quotes[random(Quotes.length)].content
    }
  },

  render: function () {
    var randomQuote = this.randomQuote;

    return (
        <div>
          <div onClick={randomQuote} className="logo"><Logo /></div>
          <div className="container">
              <Quote quote={this.state.randomQuote} />
          </div>
        </div>
    );
  },

  randomQuote: function () {
    var numQuotes = Quotes.length;

    this.setState({
        randomQuote: Quotes[random(numQuotes)].content
    });
  }

});

function random(ceil) {
    return Math.floor(Math.random() * ceil);
}

module.exports = App;