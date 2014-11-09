/** @jsx React.DOM */

var React = require('react');
var TrackActionCreators = require('../actions/TrackActionCreators');

var SearchBar = React.createClass({
	handleChange: function() {
        var self = this;

        this.props.onUserInput(
            this.refs.filterTextInput.getDOMNode().value
        );

        // clearTimeout(window.searchBarDelay)
        // window.searchBarDelay = setTimeout(function() {
        //     TrackActionCreators.fetchTracks(self.props.filterText)
        // }, 300);
	},

    render: function() {
        return (
            <form className="form-inline" role="form">
                <div className="form-group">
                	<label>Search:
                		<input
                			type="text"
                            className="form-control"
                			placeholder="Artist, Album, Track..."
                			value={this.props.filterText}
                			ref="filterTextInput"
                			onChange={this.handleChange} />
                    </label>
                </div>
            </form>
        );
    }
});

module.exports = SearchBar;