var AppDispatcher = require('../dispatcher/AppDispatcher');
var TrackConstants = require('../constants/TrackConstants');

var ActionTypes = TrackConstants.ActionTypes;

module.exports = {
	receiveTracks: function(tracks) {
		AppDispatcher.handleServerAction({
			actionType: ActionTypes.RECEIVE_TRACKS,
			tracks: tracks
		});
	}

};
