/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @jsx React.DOM
 */

var React = require('react');
var ReactPropTypes = React.PropTypes;
var TrackActions = require('../actions/TrackActions');
var TrackItem = require('./TrackItem.react');

var TracksSection = React.createClass({

  propTypes: {
    allTracks: ReactPropTypes.array.isRequired
  },

  /**
   * @return {object}
   */
  render: function() {
    // This section should be hidden by default
    // and shown when there are todos.
    if (Object.keys(this.props.allTracks).length < 1) {
      return null;
    }

    var allTracks = this.props.allTracks;
    var tracks = [];

    for (var key in allTracks) {
      tracks.push(<TrackItem key={key} track={allTracks[key]} />);
    }

    return (
      <section id="tracks">
        <ul id="todo-list">{tracks}</ul>
      </section>
    );
  }

});

module.exports = TracksSection;
