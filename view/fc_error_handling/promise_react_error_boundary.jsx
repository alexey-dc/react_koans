/*
  This file is part of ReactKoans https://github.com/alexey-dc/react_koans.

  ReactKoans is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

  ReactKoans is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

  You should have received a copy of the GNU Affero General Public License along with ReactKoans. If not, see <https://www.gnu.org/licenses/>.
*/

import React from 'react'
// https://stackoverflow.com/questions/64233408/how-to-use-useerrorhandler-in-react
import { useErrorHandler, ErrorBoundary } from 'react-error-boundary';

const someDistantAsyncMethod = async () => {
  /*
    E.g. this could be an API call done through an application-level http client
    that is shared among many, many components.

    E.g. If the network is down, that could trigger an exception.
  */
  throw "Error caught by ErrorBoundary"
}

function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <div role="alert">
      <p
        style={{marginTop: "0px", boxShadow: "0px 0px 4px 1px rgba(0,0,0,0.1)", padding: "4px"}}
        className="green"
      >
        {error}
      </p>
      <div className="button" onClick={resetErrorBoundary}>Reset</div>
    </div>
  )
}

const ErrorTrigger = () => {
  const handleError = useErrorHandler()
  const [isError, setIsError] = React.useState(false)
  const toggleError = React.useCallback(() => {
    setIsError(!isError)
  })

  React.useEffect(() => {
    if(isError) {
      someDistantAsyncMethod().then(() => {
        console.log("<handle success here>")
        console.log("Wouldn't in this example, since we always throw.")
      }, (error) => {
        handleError(error)
      })
    }
  }, [isError])

  return <div>
    {isError ? <p style={{marginTop: "0px"}} className="red">See console for error output</p> : ""}
    <div
      className="button"
      onClick={toggleError}
    >
      {isError ? "Reset" : "Throw Error"}
    </div>
  </div>
}

const PromiseReactErrorBoundary = () => {
  return <div className="card f-col f-j-space-between">
    <a target="blank" title="Throw in promise in useEffect with react-error-boundary source code" href="https://github.com/alexey-dc/react_koans/blob/main/view/fc_error_handling/promise_react_error_boundary.jsx"> Throw inside promise in useEffect </a>
    <ul style={{paddingBottom: "2vh", paddingTop: "1vh"}}>
      <li> Uses an npm package </li>
      <li> See <a href="https://www.npmjs.com/package/react-error-boundary" target="blank">react-error-boundary</a> (vs <a href="https://reactjs.org/docs/error-boundaries.html" target="blank">native react</a>) </li>
      <li> Prints to console in development </li>
      <li className="green"> Error fully handled 👌 </li>
      <li className="green"> Works with ErrorBoundary pattern </li>
      <li className="green"> Avoids global state/handlers </li>
      <li className="red"> Only works inside components </li>
      <li className="red"> Which for some use cases implies repeat code </li>
    </ul>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ErrorTrigger/>
    </ErrorBoundary>
  </div>
}

export default PromiseReactErrorBoundary
