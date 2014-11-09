var AppDispatcher = require('../dispatcher/AppDispatcher');
var TrackConstants = require('../constants/TrackConstants');
var NukeboxWebAPIUtils = require('../utils/NukeboxWebAPIUtils');

var ActionTypes = TrackConstants.ActionTypes;

module.exports = {
	fetchTracks: function(needle) {
		NukeboxWebAPIUtils.getTracks(needle);
		AppDispatcher.handleServerAction({
			actionType: ActionTypes.FETCH_TRACKS,
			needle: needle
		});
	}
};

