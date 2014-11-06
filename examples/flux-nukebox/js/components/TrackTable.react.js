/** @jsx React.DOM */

var React = require('react');
var TrackRow = require('./TrackRow.react');
var TrackStore = require('../stores/TrackStore')

function getStateFromStores() {
    return {
        tracks: TrackStore.getAll()
    };
}

var TrackTable = React.createClass({
    getInitialState: function() {
        return getStateFromStores();
    },

    componentDidMount: function() {
        TrackStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        TrackStore.removeChangeListener(this._onChange);
    },

    render: function() {
        var rows = [];
        this.state.tracks.forEach(function(track) {
        	// if (track.title.indexOf(this.props.filterText) === -1) { return; }
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
    },

    _onChange: function() {
        this.setState(getStateFromStores())
    }
});

module.exports = TrackTable;