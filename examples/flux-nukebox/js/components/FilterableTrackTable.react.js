/** @jsx React.DOM */

var React = require('react');
var SearchBar = require('./SearchBar.react');
var TrackTable = require('./TrackTable.react');

var FilterableTrackTable = React.createClass({
	getInitialState: function() {
		return {
            filterText: ''
        };
	},

	handleUserInput: function(filterText) {
		this.setState({
			filterText: filterText
		})
	},

    render: function() {
        return (
            <div>
                <SearchBar
                	filterText={this.state.filterText}
                	onUserInput={this.handleUserInput}
                />
                <TrackTable
                	filterText={this.state.filterText}
                />
            </div>
        );
    }
});

module.exports = FilterableTrackTable;