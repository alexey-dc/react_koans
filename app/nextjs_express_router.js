/*
  This file is part of ReactKoans https://github.com/alexey-dc/react_koans.

  ReactKoans is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

  ReactKoans is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

  You should have received a copy of the GNU Affero General Public License along with ReactKoans. If not, see <https://www.gnu.org/licenses/>.
*/

class NextjsExpressRouter {
  constructor(express, next) {
    this.express = express
    this.next = next
  }

  async init() {
    this.initApi()
    this.initPages()
    this.initErrors()
  }

  initApi() {
    return (new (require("./routes/api.js"))(this.express)).init()
  }

  initPages() {
    return (new (require("./routes/pages.js"))(this.express, this.next)).init()
  }

  initErrors() {
    // catch 404 and forward to error handler
    this.express.use((req, res, next) => {
      const err = new Error('Not Found')
      err.status = 404
      next(err)
    })

    this.express.use((err, req, res, next) => {
      res.status(err.status || 500)
      res.locals.error = err
      res.locals.errorDescription = err.message
      this.next.render(req, res, "/_error", {  })
    })
  }
}

module.exports = NextjsExpressRouter
