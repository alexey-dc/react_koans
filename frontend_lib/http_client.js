/*
  This file is part of ReactKoans https://github.com/alexey-dc/react_koans.

  ReactKoans is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

  ReactKoans is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

  You should have received a copy of the GNU Affero General Public License along with ReactKoans. If not, see <https://www.gnu.org/licenses/>.
*/

class HttpClient {
  static get instance() {
    if(this._instance) {
      return this._instance
    }
    this._instance = new HttpClient()
    return this._instance
  }

  async get(endpoint, data={}) {
    const queryString = new URLSearchParams(data).toString()
    const endpointQuery = endpoint + (queryString.length > 0 ? ("?" + queryString) : "")
    const response = await fetch(endpointQuery, {
      method: "GET",
      mode: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: 'follow',
    })
    return await response.json()
  }

  async post(endpoint, data = {}) {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    return await response.json(); // parses JSON response into native JavaScript objects
  }

}

export default HttpClient
