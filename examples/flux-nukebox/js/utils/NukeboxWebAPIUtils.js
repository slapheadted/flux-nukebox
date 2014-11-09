/**
 * This file is provided by Facebook for testing and evaluation purposes
 * only. Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

var TrackServerActionCreators = require('../actions/TrackServerActionCreators');
var $ = require('jquery');
var nukeboxConfig = require('../../nukebox.config.js');

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
