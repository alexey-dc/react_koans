/*
  This file is part of ReactKoans https://github.com/alexey-dc/react_koans.

  ReactKoans is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

  ReactKoans is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

  You should have received a copy of the GNU Affero General Public License along with ReactKoans. If not, see <https://www.gnu.org/licenses/>.
*/

import React from 'react'


const useIncrementingValue = (startValue=1) => {
  const [value, setValue] = React.useState(startValue)
  const increment = () => {
    setValue(value + 1)
  }
  return [value, increment]
}

const ValueDisplayComponent = () => {
  const [value, increment] = useIncrementingValue(5)
  return <div className="button" onClick={increment}>
    Click to increment: {value}
  </div>
}

const NaiveStateIsntShared = () => {
  return <div className='f-row f-j-space-around'>
    <ValueDisplayComponent/>
    {/* Size of component depends on font size, which depends on vh */}
    <div style={{width: "1vh"}}/>
    <ValueDisplayComponent/>
  </div>
}

const NaiveStoreHooks = () => {
  return <div className="card f-col f-j-space-between">
    <a target="blank" title="Naive react state hooks are isolated" href="https://github.com/alexey-dc/react_koans/blob/main/view/hooks_store/naive_store_hooks.jsx">Naive hooks as storage</a>
    <ul style={{paddingBottom: "2vh", paddingTop: "1vh"}}>
      <li>2 components sharing the same hook</li>
      <li>State is isolated - each will have an independently updated copy</li>
    </ul>
    <NaiveStateIsntShared/>
  </div>
}

export default NaiveStoreHooks
