/*
  This file is part of ReactKoans https://github.com/alexey-dc/react_koans.

  ReactKoans is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

  ReactKoans is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

  You should have received a copy of the GNU Affero General Public License along with ReactKoans. If not, see <https://www.gnu.org/licenses/>.
*/

import React from 'react'
import Layout from '../view/layout.jsx'

export default function Main(props) {
  return <Layout title="React Koans">
    <h1> React Koans </h1>
    <p> This is a collection of React <a target="_blank" href="https://en.wikipedia.org/wiki/Koan">Koans</a>: concise examples that explore standard and edge case behavior. </p>
    <p> The code is open souce, published under the <a target="_blank" href="https://www.gnu.org/licenses/agpl-3.0.en.html">GNU AGPL</a> on <a target="_blank" href="https://github.com/alexey-dc/react_koans">GitHub</a></p>
    <h1> Examples </h1>
    <ul className="large_li">
      <li> <a href="/fc_error_handling"> Functional Component error handling </a> </li>
      <li> <a href="/zustand"> Zustand </a> </li>
    </ul>
  </Layout>
}
