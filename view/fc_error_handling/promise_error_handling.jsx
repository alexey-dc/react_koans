/*
  This file is part of ReactKoans https://github.com/alexey-dc/react_koans.

  ReactKoans is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

  ReactKoans is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

  You should have received a copy of the GNU Affero General Public License along with ReactKoans. If not, see <https://www.gnu.org/licenses/>.
*/

import React from 'react'
import ErrorBoundary from './error_boundary.jsx'
// see https://github.com/alexey-dc/react_koans/blob/main/frontend_lib/koan_api.js
import KoanApi from '../../frontend_lib/koan_api.js'

const someDistantAsyncMethod = async () => {
  /*
    A common example of an async failure inside of a hook is an API call
    done through an application-level http client that is shared among many components.

    E.g. If the network is down, that could trigger an exception.

    If we need to handle that in just one hook - that's fine.
    If we have 100 API calls in the codebase - we may not want to duplicate code.

    This examples shows a way to consolidate that error handling.
  */
  return await KoanApi.instance.alwaysError("Globally handled error")
}

class ErrorEvent extends Event {
  constructor(data) {
    super('global_error')
    this._data = data
  }

  get data() {
    return this._data
  }
}

const triggerErrorWrapped = async () => {
  try {
    await someDistantAsyncMethod()
  } catch(e) {
    window.dispatchEvent(new ErrorEvent({error: e}))
  }
}

const ErrorTrigger = () => {
  const [isError, setIsError] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState("")
  const toggleError = React.useCallback(() => {
    setErrorMessage("")
    setIsError(!isError)
  })

  const errorHandler = React.useCallback((event) => {
    setIsError(true)
    setErrorMessage(event.data.error)
  })

  React.useEffect(() => {
    window.addEventListener('global_error', errorHandler)
    return () => {
      window.removeEventListener('global_error', errorHandler)
    }
  }, [])

  React.useEffect(() => {
    if(isError) {
      triggerErrorWrapped()
    }
  }, [isError])

  return <div>
    {errorMessage ? <p style={{marginTop: "0px", boxShadow: "0px 0px 4px 1px rgba(0,0,0,0.1)", padding: "4px"}} className="green"> {errorMessage} </p> : ""}
    <div
      className="button"
      onClick={toggleError}
    >
      {isError ? "Reset" : "Throw Error"}
    </div>
  </div>
}

const PromiseErrorHandling = () => {
  return <div className="card f-col f-j-space-between">
    <a target="blank" title="Throw in promise in useEffect with global error handling source code" href="https://github.com/alexey-dc/react_koans/blob/main/view/fc_error_handling/promise_error_handling.jsx"> Throw inside promise in useEffect </a>
    <ul style={{paddingBottom: "2vh", paddingTop: "1vh"}}>
      <li> Uses JavaScript's built in global event system </li>
      <li> Allows generic error handling </li>
      <li className="green"> Error fully handled 👌 </li>
      <li className="green"> Works well to DRY repeat errors </li>
      <li className="green"> React handles errors from any JS/outside components </li>
      <li className="red"> Completely self-managed </li>
    </ul>
    <ErrorBoundary>
      <ErrorTrigger/>
    </ErrorBoundary>
  </div>
}

export default PromiseErrorHandling
