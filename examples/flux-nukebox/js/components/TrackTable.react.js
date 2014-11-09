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

function filterBySearch(track, needle) {
    if (track.title && track.title.indexOf(needle) > -1 ||
        track.artist && track.artist.indexOf(needle) > -1 ||
        track.album && track.album.indexOf(needle) > -1
    ) {
        return true;
    }
    return false;
}

var TrackTable = React.createClass({
    getInitialState: function() {
        return {
            tracks: []
        }
    },

    componentDidMount: function() {
        TrackStore.addChangeListener(this._onChange);
        TrackActionCreators.fetchTracks();
    },

    componentWillUnmount: function() {
        TrackStore.removeChangeListener(this._onChange);
    },

    render: function() {
        var rows = [];
        
        this.state.tracks.forEach(function(track) {
        	filterBySearch(track, this.props.filterText) && rows.push(<TrackRow track={track} key={track._id} />);
        }.bind(this));
        
        return (
            <table className="table table-hover">
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