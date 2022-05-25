/*
  This file is part of ReactKoans https://github.com/alexey-dc/react_koans.

  ReactKoans is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

  ReactKoans is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

  You should have received a copy of the GNU Affero General Public License along with ReactKoans. If not, see <https://www.gnu.org/licenses/>.
*/

import React from 'react'
import ErrorBoundary from '../comp/error_boundary.jsx'

const someDistantAsyncMethod = async () => {
  /*
    E.g. this could be an API call done through an application-level http client
  */
  throw "Error inside promise"
}

const ErrorTrigger = () => {
  const [isError, setIsError] = React.useState(false)
  const toggleError = React.useCallback(() => {
    setIsError(!isError)
  })

  if(isError) {
    someDistantAsyncMethod()
  }

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

const PromiseErrorBoundary = () => {
  return <div className="card f-col f-j-space-between">
    <ul style={{paddingBottom: "2vh"}}>
      <li> Throw in promise in component </li>
      <li> Error boundary </li>
      <li> Same as w/o error boundary </li>
      <li> Does not destroy the view </li>
      <li className="red"> Completely unhandled </li>
      <li className="red"> Shows up in console </li>
    </ul>
    <ErrorBoundary>
      <ErrorTrigger/>
    </ErrorBoundary>
  </div>
}

export default PromiseErrorBoundary
