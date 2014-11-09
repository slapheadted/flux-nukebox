var TrackConstants = require('../constants/TrackConstants');
var PayloadSources = TrackConstants.PayloadSources;
var Dispatcher = require('flux').Dispatcher;
var copyProperties = require('react/lib/copyProperties');
var AppDispatcher = copyProperties(new Dispatcher(), {

  /**
   * A bridge function between the views and the dispatcher, marking the action
   * as a view action.  Another variant here could be handleServerAction.
   * @param  {object} action The data coming from the view.
   */
  handleViewAction: function(action) {
    var payload  = {
      source: PayloadSources.VIEW_ACTION,
      action: action
    };
    this.dispatch(payload);
  },

  /**
   * @param {object} action The details of the action, including the action's
   * type and additional data coming from the server.
   */
  handleServerAction: function(action) {
    var payload = {
      source: PayloadSources.SERVER_ACTION,
      action: action
    };
    this.dispatch(payload);
  },

});

module.exports = AppDispatcher;
