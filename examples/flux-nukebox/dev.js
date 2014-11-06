/** @jsx React.DOM */
var React = require('react');
var FilterableTrackTable = require('./js/components/FilterableTrackTable.react');
var NukeboxExampleData = require('./NukeboxExampleData');
var NukeboxWebAPIUtils = require('./js/utils/NukeboxWebAPIUtils');

NukeboxExampleData.init();
NukeboxWebAPIUtils.getTracks();
 
React.renderComponent(<FilterableTrackTable />, document.body);