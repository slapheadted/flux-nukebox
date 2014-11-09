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

