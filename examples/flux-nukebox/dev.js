/** @jsx React.DOM */
var React = require('react');

var TrackRow = React.createClass({
    render: function() {
        return (
            <tr>
                <td>{this.props.track.artist}</td>
                <td>{this.props.track.album}</td>
                <td>{this.props.track.title}</td>
            </tr>
        );
    }
});

var TrackTable = React.createClass({
    render: function() {
        var rows = [];
        this.props.tracks.forEach(function(track) {
        	if (track.title.indexOf(this.props.filterText) === -1) { return; }
            rows.push(<TrackRow track={track} key={track.id} />);
        }.bind(this));
        return (
            <table>
                <thead>
                    <tr>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Track</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
});

var SearchBar = React.createClass({
	handleChange: function() {
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
                	tracks={this.props.tracks}
                	filterText={this.state.filterText}
                />
            </div>
        );
    }
});


var TRACKS = [
	{id: 1, artist: 'The Beatles', album: 'Revolver', title: 'Michelle'},
	{id: 2, artist: 'The Beatles', album: 'The White Album', title: 'Dear Prudence'},
	{id: 3, artist: 'The Beatles', album: 'Let It Be', title: 'Hey Jude'}
];
 
React.renderComponent(<FilterableTrackTable tracks={TRACKS} />, document.body);