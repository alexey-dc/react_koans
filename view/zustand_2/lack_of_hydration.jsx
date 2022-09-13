/*
  This file is part of ReactKoans https://github.com/alexey-dc/react_koans.

  ReactKoans is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

  ReactKoans is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

  You should have received a copy of the GNU Affero General Public License along with ReactKoans. If not, see <https://www.gnu.org/licenses/>.
*/

import React from 'react'

import HydrationDemoComponent from './components/hydration_demo_component'

const LackOfHydration = () => {
  return <div className="card f-col f-j-space-between">
    <a target="blank" title="Zustand Persistence Middleware + NextJS" href="https://github.com/alexey-dc/react_koans/blob/main/view/zustand_2/lack_of_hydration.jsx">Zustand Persistence Middleware + NextJS: Hydration</a>
    <ul style={{paddingBottom: "2vh", paddingTop: "1vh"}}>
      <li>Persists data with Zustand's persist middleware</li>
      <li>The page is rendered server-side via NextJS, which reads the default value from zustand (0)</li>
      <li>When the page is rendered browser-side, zustand reads from sessionStorage, which may have a different value</li>
      <li>If the page is refreshed, the inconsistency will cause an error to pop up in the browser's JS console</li>
    </ul>
    <HydrationDemoComponent/>
  </div>
}

export default LackOfHydration
