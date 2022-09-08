//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// This demoes the Slices pattern https://github.com/pmndrs/zustand/blob/main/docs/guides/typescript.md#slices-pattern  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
  This file is part of ReactKoans https://github.com/alexey-dc/react_koans.

  ReactKoans is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

  ReactKoans is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

  You should have received a copy of the GNU Affero General Public License along with ReactKoans. If not, see <https://www.gnu.org/licenses/>.
*/

import { createCounter, createOtherCounter, createSum } from './state_functions.js'

import create from 'zustand'

const useComboStore = create((...a) => ({
  ...createCounter(...a),
  ...createOtherCounter(...a),
  ...createSum(...a),
}))

export default useComboStore