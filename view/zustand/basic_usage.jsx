/*
  This file is part of ReactKoans https://github.com/alexey-dc/react_koans.

  ReactKoans is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

  ReactKoans is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

  You should have received a copy of the GNU Affero General Public License along with ReactKoans. If not, see <https://www.gnu.org/licenses/>.
*/

import React from 'react'
import useBasicStore from './store/use_basic_store.js'

const StatefulComponent = () => {
  const value = useBasicStore(state => state.demoInt)
  const incr = useBasicStore(state => state.incr)
  const decr = useBasicStore(state => state.decr)

  return <div className="f-row f-j-space-between">
    <div className="button" onClick={decr}>
      -
    </div>
    <div className="f-col f-j-center">
      {value}
    </div>
    <div className="button" onClick={incr}>
      +
    </div>
  </div>
}

const BasicUsage = () => {
  return <div className="card f-col f-j-space-between">
    <a target="blank" title="Basic Zustand usage" href="https://github.com/alexey-dc/react_koans/blob/main/view/zustand/basic_usage.jsx"> Basic zustand usage </a>
    <ul style={{paddingBottom: "2vh", paddingTop: "1vh"}}>
      <li> Instantiates <a target="blank" href="https://github.com/alexey-dc/react_koans/blob/main/view/zustand/store/use_basic_store.js"> useBasicStore </a> </li>
      <li> Re-draws from value changes </li>
    </ul>
    <StatefulComponent/>
  </div>
}

export default BasicUsage
