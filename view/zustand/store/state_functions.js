//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// This demoes the Slices pattern https://github.com/pmndrs/zustand/blob/main/docs/guides/typescript.md#slices-pattern  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
  This file is part of ReactKoans https://github.com/alexey-dc/react_koans.

  ReactKoans is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

  ReactKoans is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

  You should have received a copy of the GNU Affero General Public License along with ReactKoans. If not, see <https://www.gnu.org/licenses/>.
*/


export const createOtherCounter = (set) => ({
  otherCounter: 1,
  incr2: () => set(state => {
    const newValue = state.otherCounter * 2
    return {
      otherCounter: newValue,
      /*
        Note 2 things above this state update:
        1. We have to be explicitly aware of state in other slices -
           i.e. there's not a dependency graph of values in Zutand's state like
           there is with react hooks.

        2. We have to explicitly pass in the new value - i.e., we can't do
           sum: state.counter + state.otherCounter,
           since that value won't update until after this function finishes running
        
        So while we can split a repository up, we can't easily compartmentalize
        the slices from each other w/o explicitly subscribing to value updates.

        See `share_across_stores.jsx` for an example of a more modular way
        of splitting the stores up, where children stores can subscribe to changes
        in parent data, and parents can be oblivious of their children.
      */
      sum: state.counter + newValue
    }
  }),
  decr2: () => set(state => {
    const newValue = state.otherCounter / 2 
    return {
      otherCounter: newValue,
      sum: state.counter + newValue
    }
  })
})

export const createCounter = (set) => ({
  counter: 0,
  incr: () => set(state => {
    const newValue = state.counter + 1
    return {
      counter: newValue,
      sum: newValue + state.otherCounter
    }
  }),
  decr: () => set(state => {
    const newValue = state.counter - 1
    return {
      counter: newValue,
      sum: newValue + state.otherCounter
    }
  })
})

export const createSum = (set) => ({
  sum: 1,
  incrSum: () => set((state) => { 
    state.incr()
    state.incr2()
  }),
  decrSum: () => set((state) => {
    state.decr()
    state.decr2()
  })
})
