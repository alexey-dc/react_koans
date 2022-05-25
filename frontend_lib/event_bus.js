/*
  This file is part of ReactKoans https://github.com/alexey-dc/react_koans.

  ReactKoans is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

  ReactKoans is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

  You should have received a copy of the GNU Affero General Public License along with ReactKoans. If not, see <https://www.gnu.org/licenses/>.
*/

class EventBus {
  constructor() {
    this.handlers = {}
    this.handlersByOwner = {}
  }

  static get instance() {
    if(this._instance) {
      return this._instance
    }
    this._instance = new EventBus()
    return this._instance
  }

  addHandler(eventKind, handler, owner) {
    this.handlers[eventKind] = this.handlers[eventKind] || []
    this.handlers[eventKind].push(handler)
    this.handlersByOwner[owner] = this.handlersByOwner[owner] || []
    this.handlersByOwner[owner].push({kind: eventKind, handler: handler})
  }

  fire(event) {
    if(!event.kind) {
      throw "Must provide event kind"
    }
    const handlers = this.handlers[event.kind]

    if(!handlers) {
      return
    }

    for(const handler of handlers) {
      handler(event)
    }
  }

  clear(owner) {
    if(!this.handlersByOwner[owner]) {
      return delete this.handlersByOwner[owner]
    }
    for(const info of this.handlersByOwner[owner]) {
      // NOTE: don't call "this.remove": that modifies the array while iterating...
      this.removeFromArray(this.handlers[info.kind], info.handler)
    }
    delete this.handlersByOwner[owner]
  }

  remove(eventKind, handler) {
    if(!this.handlers[eventKind]) {
      return
    }
    this.removeFromArray(this.handlers[eventKind], handler)

    for(const owner of Object.keys(this.handlersByOwner)) {
      const handlers = this.handlersByOwner[owner]
      const index = handlers.map((h) => (h.handler)).indexOf(handler)
      if(index > 0) {
        handlers.splice(index, 1)
      }
    }
  }

  removeFromArray(array, value) {
    const index = array.indexOf(value)
    if(index >= 0) {
      array.splice(index, 1)
    }
  }
}

module.exports = EventBus
