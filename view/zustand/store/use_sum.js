/*
  This file is part of ReactKoans https://github.com/alexey-dc/react_koans.

  ReactKoans is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

  ReactKoans is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

  You should have received a copy of the GNU Affero General Public License along with ReactKoans. If not, see <https://www.gnu.org/licenses/>.
*/

import useCounter from './use_counter.js'
import useOtherCounter from './use_other_counter'

import create from 'zustand'

const useSum = create(set => {
  useCounter.subscribe((counterState) => {
    set({
      firstCounter: counterState.counter,
      sum: counterState.counter + useOtherCounter.getState().otherCounter
    })
  })
  useOtherCounter.subscribe((otherCounterState) => {
    set({
      secondCounter: otherCounterState.otherCounter,
      sum: useCounter.getState().counter + otherCounterState.otherCounter
    })
  })
  return {
    sum: useCounter.getState().counter + useOtherCounter.getState().otherCounter,
    firstCounter: useCounter.getState().counter,
    secondCounter: useOtherCounter.getState().otherCounter,
    incrSum: () => {
      useCounter.getState().incr()
      useOtherCounter.getState().incr2()
    },
    decrSum: () => {
      useCounter.getState().decr()
      useOtherCounter.getState().decr2()
    }
  }
})

export default useSum