/*
  This file is part of ReactKoans https://github.com/alexey-dc/react_koans.

  ReactKoans is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

  ReactKoans is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

  You should have received a copy of the GNU Affero General Public License along with ReactKoans. If not, see <https://www.gnu.org/licenses/>.
*/

import React from 'react'

function createAdHocStore(startValue) {
  let listeners = [];
  let value = startValue;

  function get() {
    return value;
  }

  function set(newValue) {
    if (value === newValue) return;
    value = newValue;
    listeners.forEach((l) => l(value));
  }

  function subscribe(listenerFunc) {
    listeners.push(listenerFunc);
    return () => unsubscribe(listenerFunc);
  }

  function unsubscribe(listenerFunc) {
    listeners = listeners.filter((l) => l !== listenerFunc);
  }

  return { get, set, subscribe, unsubscribe };
}

const sharedStates = {}

function useSharedState(name, startValue=null) {
  sharedStates[name] = sharedStates[name] || createAdHocStore(startValue)
  const [value, setValue] = React.useState(sharedStates[name].get())
  React.useEffect(() => {
    return sharedStates[name].subscribe(setValue)
  }, [])
  return [value, sharedStates[name].set]
}

const useIncrementingValue = () => {
  const [ value, setValue ] = useSharedState("incremented_value", 5)
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

const AdHocSharedStateThroughHooks = () => {
  return <div className='f-row f-j-space-around'>
    <ValueDisplayComponent/>
    {/* Size of component depends on font size, which depends on vh */}
    <div style={{width: "2vh"}}/>
    <ValueDisplayComponent/>
  </div>
}

const SharedHookState = () => {
  return <div className="card f-col f-j-space-between">
    <a target="blank" title="Ad hoc state sharing in functional components" href="https://github.com/alexey-dc/react_koans/blob/main/view/hooks_store/shared_hook_state.jsx">Ad hoc shared state through hooks</a>
    <ul style={{paddingBottom: "2vh", paddingTop: "1vh"}}>
      <li>Self-managed state synchronization across views</li>
      <li>State is shared - either component will update the shared state</li>
    </ul>
    <AdHocSharedStateThroughHooks/>
  </div>
}

export default SharedHookState
