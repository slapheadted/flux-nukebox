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

module.exports = TrackRow;