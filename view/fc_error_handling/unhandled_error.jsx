/*
  This file is part of ReactKoans https://github.com/alexey-dc/react_koans.

  ReactKoans is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

  ReactKoans is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

  You should have received a copy of the GNU Affero General Public License along with ReactKoans. If not, see <https://www.gnu.org/licenses/>.
*/

import React from 'react'

const ErrorTrigger = () => {
  const [isError, setIsError] = React.useState(false)
  const toggleError = React.useCallback(() => {
    setIsError(!isError)
  })

  if(isError) {
    throw "Basic error in component"
  }

  return <div
    className="button"
    onClick={toggleError}
  >
    Throw Error
  </div>
}

const UnhandledError = () => {
  return <div className="card f-col f-j-space-between">
    <ul style={{paddingBottom: "2vh"}}>
      <li> <a target="blank" title="Unhandled error source code" href="https://github.com/alexey-dc/react_koans/blob/main/view/fc_error_handling/unhandled_error.jsx"> Throw inside component </a> </li>
      <li> No error boundary </li>
      <li className="red"> Destroys page </li>
      <li className="red"> Only recovery is to refresh </li>
    </ul>
    <ErrorTrigger/>
  </div>
}

export default UnhandledError
