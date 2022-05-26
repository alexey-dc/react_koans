/*
  This file is part of ReactKoans https://github.com/alexey-dc/react_koans.

  ReactKoans is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

  ReactKoans is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

  You should have received a copy of the GNU Affero General Public License along with ReactKoans. If not, see <https://www.gnu.org/licenses/>.
*/

const ERRORS = {
  "UNEXPECTED_ERROR": "UNEXPECTED_ERROR"
}

const http = {
  error: (req, res, errorCode, message, httpStatus=500) => {
    res.status(httpStatus)
    res.send({
      error: {
        code: errorCode,
        message: message
      }
    })
  }
}

function parseUriParams(receivedParams) {
  const result = {}
  for(const param of receivedParams) {
    result[param] = decodeURIComponent(receivedParams[param])
  }
  return result
}


class Api {
  constructor(express) {
    this.express = express
  }

  init() {
    this.express.get("/always_error", (req, res) => {
      // const params = parseUriParams(req.query)
      const message = req.query.message || "This endpoint always returns an error"
      http.error(req, res, ERRORS.UNEXPECTED_ERROR, message)
    })
  }


}

module.exports = Api
