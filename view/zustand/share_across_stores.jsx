/*
  This file is part of ReactKoans https://github.com/alexey-dc/react_koans.

  ReactKoans is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

  ReactKoans is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

  You should have received a copy of the GNU Affero General Public License along with ReactKoans. If not, see <https://www.gnu.org/licenses/>.
*/

import React from 'react'

import useSum  from './store/use_sum.js'
import useCounter from './store/use_counter.js'
import useOtherCounter from './store/use_other_counter.js'

const ValueDisplay = (props) => {
  return <div className="f-row f-j-space-between">
    <div className="button" onClick={props.decr}>
      -
    </div>
    <div className="f-col f-j-center" style={props.valueStyle}>
      {props.value}
    </div>
    <div className="button" onClick={props.incr}>
      +
    </div>
  </div>
}

const StatefulComponent = () => {
  const { counter, incr, decr } = useCounter()
  const { otherCounter, incr2, decr2 } = useOtherCounter()
  const { sum, incrSum, decrSum } = useSum()

  return <div className='f-col'>
    <ValueDisplay value={counter} incr={incr} decr={decr} valueStyle={{color: 'red'}}/>
    <span style={{width: "100%", textAlign: "center", fontSize: "3vh"}}>+</span>
    <ValueDisplay value={otherCounter} incr={incr2} decr={decr2}/>
    <span style={{width: "100%", textAlign: "center", fontSize: "3vh"}}>=</span>
    <ValueDisplay value={sum} incr={incrSum} decr={decrSum}/>
  </div>
}

const ShareAcrossStores = () => {
  return <div className="card f-col f-j-space-between">
    <a target="blank" title="Share zustand state across stores" href="https://github.com/alexey-dc/react_koans/blob/main/view/zustand/share_across_stores.jsx"> Sharing Zustand state across stores </a>
    <ul style={{paddingBottom: "2vh", paddingTop: "1vh"}}>
      <li> Instantiates <a target="blank" href="https://github.com/alexey-dc/react_koans/blob/main/view/zustand/store/use_sum.js"> useSum </a> </li>
      <li> That store sums data from two other stores: <a target="blank" href="https://github.com/alexey-dc/react_koans/blob/main/view/zustand/store/use_counter.js"> useCounter </a> and <a target="blank" href="https://github.com/alexey-dc/react_koans/blob/main/view/zustand/store/use_other_counter.js"> useOtherCounter </a></li>
      <li> That's achieved by subscribing from the compound store to each of the lower level stores.</li>
      <li> The first counter shares state with other examples on this page. </li>
    </ul>
    <StatefulComponent/>
  </div>
}

export default ShareAcrossStores
