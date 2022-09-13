/*
  This file is part of ReactKoans https://github.com/alexey-dc/react_koans.

  ReactKoans is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

  ReactKoans is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

  You should have received a copy of the GNU Affero General Public License along with ReactKoans. If not, see <https://www.gnu.org/licenses/>.
*/

import React from 'react'

import HydratingLoader from './components/hydrating_loader'
import SessionStorageComponent from './components/session_storage_component'

const SessionStorageZustand = () => {
  return <div className="card f-col f-j-space-between">
    <a target="blank" title="Zustand Persistence to sessionStorage" href="https://github.com/alexey-dc/react_koans/blob/main/view/zustand_2/session_storage_zustand.jsx">Zustand middleware-based persistence: sessionStorage</a>
    <ul style={{paddingBottom: "2vh", paddingTop: "1vh"}}>
      <li>Relies on <a target="blank" href="https://github.com/alexey-dc/react_koans/blob/main/view/zustand_2/store/use_session_storage_counter.js"> useSessionStorageCounter </a> </li>
      <li>Writes to sessionStorage, instead of the default localStorage</li>
      <li>Data survives refreshes, but will not be available on a new tab</li>
    </ul>
    <HydratingLoader>
      <SessionStorageComponent/>
    </HydratingLoader>
  </div>
}

export default SessionStorageZustand
