'use strict';

var React = require('react');

var Quote = React.createClass({

    render: function () {
        return (
            <div className="quote">
                <h1 className="quote-content">{this.props.quote}</h1>
            </div>
        );
    }
});



module.exports = Quote;