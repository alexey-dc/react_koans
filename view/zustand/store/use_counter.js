/*
  This file is part of ReactKoans https://github.com/alexey-dc/react_koans.

  ReactKoans is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

  ReactKoans is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

  You should have received a copy of the GNU Affero General Public License along with ReactKoans. If not, see <https://www.gnu.org/licenses/>.
*/

import create from 'zustand'

const useCounter = create(set => ({
  counter: 0,
  incr: () => set(state => ({ counter: state.counter + 1 })),
  decr: () => set(state => ({ counter: state.counter - 1 }))
}))

export default useCounter
