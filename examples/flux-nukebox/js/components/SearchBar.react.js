/** @jsx React.DOM */

var React = require('react');

var SearchBar = React.createClass({
	handleChange: function() {
		console.log('text', this.props.filterText)
		TrackActions.fetchTracks(this.props.filterText)
		this.props.onUserInput(
			this.refs.filterTextInput.getDOMNode().value
		);
	},

    render: function() {
        return (
            <form>
            	<label>Search:
            		<input
            			type="text"
            			placeholder="Artist, Album, Track..."
            			value={this.props.filterText}
            			ref="filterTextInput"
            			onChange={this.handleChange} /></label>
            </form>
        );
    }
});

module.exports = SearchBar;