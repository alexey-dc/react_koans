/*
  This file is part of ReactKoans https://github.com/alexey-dc/react_koans.

  ReactKoans is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

  ReactKoans is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

  You should have received a copy of the GNU Affero General Public License along with ReactKoans. If not, see <https://www.gnu.org/licenses/>.
*/

import React from 'react'

import HydratingLoader from './components/hydrating_loader'
import LocalStorageComponent from './components/local_storage_component'

const PersistenceMiddleware = () => {
  return <div className="card f-col f-j-space-between">
    <a target="blank" title="Zustand Persistence via Middleware" href="https://github.com/alexey-dc/react_koans/blob/main/view/zustand_2/persistence_middleware.jsx">Zustand Persistence via Middleware</a>
    <ul style={{paddingBottom: "2vh", paddingTop: "1vh"}}>
      <li>Relies on <a target="blank" href="https://github.com/alexey-dc/react_koans/blob/main/view/zustand_2/store/use_local_storage_counter.js"> useLocalStorageCounter </a> </li>
      <li>Which leverages Zustand's built-in middleware for storing data in localStorage</li>
      <li>Requires a client-side hydration step when used in tandem with SSR</li>
      <li>This component is rendered with a hydration step, so is SSR-compatible</li>
    </ul>
    <HydratingLoader>
      <LocalStorageComponent/>
    </HydratingLoader>
  </div>
}

export default PersistenceMiddleware
