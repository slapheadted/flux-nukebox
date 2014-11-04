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

/**
 * This component operates as a "Controller-View".  It listens for changes in
 * the TrackStore and passes the new data to its children.
 */

var React = require('react');
var Header = require('./Header.react');
var TracksSection = require('./TracksSection.react');
var TrackStore = require('../stores/TrackStore');

/**
 * Retrieve the current track data from the TrackStore
 */
function getTrackState() {
  return {
    allTracks: TrackStore.getAll()
  };
}

var NukeboxApp = React.createClass({

  getInitialState: function() {
    return getTrackState();
  },

  componentDidMount: function() {
    TrackStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    TrackStore.removeChangeListener(this._onChange);
  },

  /**
   * @return {object}
   */
  render: function() {
  	return (
      <div>
        <Header />
        <TracksSection
          allTracks={this.state.allTracks}
        />
      </div>
  	);
  },

  /**
   * Event handler for 'change' events coming from the TrackStore
   */
  _onChange: function() {
    this.setState(getTrackState());
  }

});

module.exports = NukeboxApp;
