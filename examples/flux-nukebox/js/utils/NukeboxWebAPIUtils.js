var $ = require('jquery');
var nukeboxConfig = require('../../nukebox.config.js');
var TrackServerActionCreators = require('../actions/TrackServerActionCreators');

module.exports = {
  	getTracks: function(needle) {
  		needle = needle || ''
		// simulate retrieving data from a database
		// var rawTracks = JSON.parse(localStorage.getItem('tracks'));

		$.ajax({
			url: nukeboxConfig.apiUrl + 'music/' + needle,
			dataType: 'jsonp'
		}).done(function(tracks) {
			TrackServerActionCreators.receiveTracks(tracks);
		});
  	}
};
