/*
  This file is part of ReactKoans https://github.com/alexey-dc/react_koans.

  ReactKoans is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

  ReactKoans is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

  You should have received a copy of the GNU Affero General Public License along with ReactKoans. If not, see <https://www.gnu.org/licenses/>.
*/

import React from 'react'

import useComboStore  from './store/use_combo_store.js'

const ValueDisplay = (props) => {
  return <div className="f-row f-j-space-between">
    <div className="button" onClick={props.decr}>
      -
    </div>
    <div className="f-col f-j-center">
      {props.value}
    </div>
    <div className="button" onClick={props.incr}>
      +
    </div>
  </div>
}

const StatefulComponent = () => {
  const { counter, incr, decr } = useComboStore()
  const { otherCounter, incr2, decr2 } = useComboStore()
  const { sum, incrSum, decrSum } = useComboStore()

  return <div className='f-col'>
    <ValueDisplay value={counter} incr={incr} decr={decr}/>
    <span style={{width: "100%", textAlign: "center", fontSize: "3vh"}}>+</span>
    <ValueDisplay value={otherCounter} incr={incr2} decr={decr2}/>
    <span style={{width: "100%", textAlign: "center", fontSize: "3vh"}}>=</span>
    <ValueDisplay value={sum} incr={incrSum} decr={decrSum}/>
  </div>
}

const SplitStores = () => {
  return <div className="card f-col f-j-space-between">
    <a target="blank" title="Splitting up Zustand stores with Slices pattern" href="https://github.com/alexey-dc/react_koans/blob/main/view/zustand/split_stores.jsx"> Splitting up Zustand stores with the Slices pattern </a>
    <ul style={{paddingBottom: "2vh", paddingTop: "1vh"}}>
      <li>Instantiates <a target="blank" href="https://github.com/alexey-dc/react_koans/blob/main/view/zustand/store/use_combo_store.js"> useComboStore </a> </li>
      <li>That store is assembled from functions defined across several files. </li>
      <li>This is an implementation of the <a target="_blank" href="https://github.com/pmndrs/zustand/blob/main/docs/guides/typescript.md#slices-pattern">Slices pattern</a>, recommended by Zustand.</li>
      <li>The counters below represent 2 different values in a compound store, and the third value is their sum.</li>
      <li>With a naive implementation, the 2 basic values must know about their dependent value, and update the dependent value when they're changed.</li>
    </ul>
    <StatefulComponent/>
  </div>
}

export default SplitStores
