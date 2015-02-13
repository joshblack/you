'use strict';

var React = require('react');

var Logo = React.createClass({
    render: function () {
        return (
            <span onClick={this.handleClick} className="you">&amp;you</span>
        );
    }
});

module.exports = Logo;