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

module.exports = {

  init: function() {
    localStorage.clear();
    localStorage.setItem('tracks', JSON.stringify([
      {
        id: 't_1',
        artist: 'The Beatles',
        album: 'The White Album',
        title: 'Dear Prudence'
      },
      {
        id: 't_2',
        artist: 'The Beatles',
        album: 'Let It Be',
        title: 'Hey Jude'
      },
      {
        id: 't_3',
        artist: 'Nirvana',
        album: 'In Utero',
        title: 'Frances Farmer Will Have Her Revenge'
      }
      
    ]));
  }

};
