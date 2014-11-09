var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var TrackConstants = require('../constants/TrackConstants');
var merge = require('react/lib/merge');

var ActionTypes = TrackConstants.ActionTypes;
var CHANGE_EVENT = 'change';
var _tracks = [];

var TrackStore = merge(EventEmitter.prototype, {
    getAll: function() {
        return _tracks;
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function(payload) {
    var action = payload.action;

    switch(action.actionType) {
        case ActionTypes.RECEIVE_TRACKS:
            _tracks = action.tracks;
            break;
        default:
        return true;
    }

    // This often goes in each case that should trigger a UI change. This store
    // needs to trigger a UI change after every view action, so we can make the
    // code less repetitive by putting it here.  We need the default case,
    // however, to make sure this only gets called after one of the cases above.
    TrackStore.emitChange();

    return true; // No errors.  Needed by promise in Dispatcher.
});

module.exports = TrackStore;