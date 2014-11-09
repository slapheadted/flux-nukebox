var keyMirror = require('react/lib/keyMirror');

module.exports = {
	ActionTypes: keyMirror({
		RECEIVE_TRACKS: null,
		FETCH_TRACKS: null,
		TODO_CREATE: null,
		TODO_COMPLETE: null,
		TODO_DESTROY: null,
		TODO_DESTROY_COMPLETED: null,
		TODO_TOGGLE_COMPLETE_ALL: null,
		TODO_UNDO_COMPLETE: null,
		TODO_UPDATE_TEXT: null
	}),
	PayloadSources: keyMirror({
		VIEW_ACTION: null,
		SERVER_ACTION: null
	})
};