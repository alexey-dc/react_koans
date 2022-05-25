/*
  This file is part of ReactKoans https://github.com/alexey-dc/react_koans.

  ReactKoans is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

  ReactKoans is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

  You should have received a copy of the GNU Affero General Public License along with ReactKoans. If not, see <https://www.gnu.org/licenses/>.
*/

const express = require('express');
const next = require('next')
const NextjsExpressRouter = require("./nextjs_express_router")
const Middleware = require("./middleware")

const httpServer = (express) => {
  return require('http').createServer(express)
}

const httpsServer = (express) => {
  const fs = require('fs')
  const options = {
    key: fs.readFileSync(process.env.SSL_PRIVATE_KEY_PATH, 'utf8'),
    cert: fs.readFileSync(process.env.SSL_CERTIFICATE_PATH, 'utf8')
  }
  return require('https').createServer(options, express)
}

class Server {
  constructor(port) {
    this.port = port
    this.express = express()
    this.next = next({ dev: process.env.NODE_ENV !== 'production' })
    this.middleware = new Middleware(this.express)
    this.router = new NextjsExpressRouter(this.express, this.next)
  }

  async start() {
    await this.next.prepare()
    await this.middleware.init()
    await this.router.init()
    this.server = httpsServer(this.express)
    this.server.listen(process.env.EXPRESS_PORT)
  }
}

module.exports = Server
