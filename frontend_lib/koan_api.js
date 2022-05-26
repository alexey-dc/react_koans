import HttpClient from './http_client.js'

class KoanApi {
  static get instance() {
    if(this._instance) {
      return this._instance
    }
    this._instance = new KoanApi()
    return this._instance
  }

  async alwaysError(errorMessage) {
    return this.standardGet("/always_error", {message: errorMessage})
  }

  async standardGet(endpoint, data) {
    const result = await HttpClient.instance.get("/always_error", data)
    /*
      This style of handling API errors may or not make sense for
      your application - but a client-side HTTP request
      may always in principle throw en error:

      - The network may be down
      - You may get an invalid response from the backend (expecting JSON, got HTML)
      - Bug in handling the response
    */
    if(result.error && result.error.code == "UNEXPECTED_ERROR") {
      throw result.error.message
    }
    return result
  }
}

export default KoanApi
