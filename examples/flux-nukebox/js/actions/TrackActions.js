/*
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * TrackActions
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var TrackConstants = require('../constants/TrackConstants');

var TrackActions = {

  /**
   * @param  {string} id The ID of the ToDo item
   * @param  {string} text
   */
  playTrack: function(id) {
    AppDispatcher.handleViewAction({
      actionType: TrackConstants.TRACK_PLAY,
      id: id
    });
  }

};

module.exports = TrackActions;
