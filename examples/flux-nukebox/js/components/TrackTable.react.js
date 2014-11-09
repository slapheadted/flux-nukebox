/** @jsx React.DOM */

var React = require('react');
var TrackRow = require('./TrackRow.react');
var TrackStore = require('../stores/TrackStore');
var TrackActionCreators = require('../actions/TrackActionCreators');

function getStateFromStores() {
    return {
        tracks: TrackStore.getAll()
    };
}

var TrackTable = React.createClass({
    getInitialState: function() {
        TrackActionCreators.fetchTracks();
        return {
            tracks: []
        }
    },

    componentDidMount: function() {
        TrackStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        TrackStore.removeChangeListener(this._onChange);
    },

    render: function() {
        console.log('render', this.state.tracks)
        var rows = [];
        if (this.state.tracks.length) {
            this.state.tracks.forEach(function(track) {
            	// if (track.title.indexOf(this.props.filterText) === -1) { return; }
                rows.push(<TrackRow track={track} key={track._id} />);
            }.bind(this));
        }
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
        console.log('onChange')
        this.setState(getStateFromStores())
    }
});

module.exports = TrackTable;