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

var cx = require('react/lib/cx');

var TrackItem = React.createClass({

  propTypes: {
   track: ReactPropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      isPlaying: false
    };
  },

  /**
   * @return {object}
   */
  render: function() {
    var track = this.props.track;

    // List items should get the class 'editing' when editing
    // and 'completed' when marked as completed.
    // Note that 'completed' is a classification while 'complete' is a state.
    // This differentiation between classification and state becomes important
    // in the naming of view actions toggleComplete() vs. destroyCompleted().
    return (
      <li
        className={cx({
          'playing': this.state.isPlaying
        })}
        key={track.id}>
        {track.title}
      </li>
    );
  },

  _onDoubleClick: function() {
    this.setState({isPlaying: true});
  }

});

module.exports = TrackItem;
