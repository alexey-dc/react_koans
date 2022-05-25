/*
  This file is part of ReactKoans https://github.com/alexey-dc/react_koans.

  ReactKoans is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

  ReactKoans is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

  You should have received a copy of the GNU Affero General Public License along with ReactKoans. If not, see <https://www.gnu.org/licenses/>.
*/

import React from 'react'
import ErrorBoundary from '../comp/error_boundary.jsx'
import EventBus from '../../frontend_lib/event_bus.js'

const someDistantAsyncMethod = async () => {
  /*
    E.g. this could be an API call done through an application-level http client.
    E.g. If the network is down, that could trigger an exception.
    If we need to handle that in just one hook - that's fine.
    If we have 100 API calls in the codebase - we may not want to duplicate code.
  */
  throw "Error inside promise in useEffect"
}

const triggerErrorWrapped = async () => {
  try {
    await someDistantAsyncMethod()
  } catch(e) {
    EventBus.instance.fire({
      kind: "global_error",
      error: e
    })
  }
}

const ErrorTrigger = () => {
  const [isError, setIsError] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState("")
  const toggleError = React.useCallback(() => {
    setErrorMessage("")
    setIsError(!isError)
  })

  React.useEffect(() => {
    EventBus.instance.addHandler("global_error", (event) => {
      setIsError(true)
      setErrorMessage(event.error)
    }, "promise_error_handling")

    return () => {
      EventBus.instance.clear("promise_error_handling")
    }
  }, [])

  React.useEffect(() => {
    if(isError) {
      triggerErrorWrapped()
    }
  }, [isError])

  return <div>
    {errorMessage ? <p style={{marginTop: "0px"}} className="red"> {errorMessage} </p> : ""}
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
    <ul style={{paddingBottom: "2vh"}}>
      <li> Throw inside promise in useEffect </li>
      <li> Global event system </li>
      <li> Allows generic error handling </li>
      <li> Works best with a top-level catch </li>
      <li className="green"> Error fully handled 👌 </li>
      <li className="green"> No stray console output 👌 </li>
      <li className="red"> Completely self-managed </li>
      <li className="red"> 1-off errors are best handled in the hook </li>
    </ul>
    <ErrorBoundary>
      <ErrorTrigger/>
    </ErrorBoundary>
  </div>
}

export default PromiseErrorHandling
