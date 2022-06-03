/*
  This file is part of ReactKoans https://github.com/alexey-dc/react_koans.

  ReactKoans is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

  ReactKoans is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

  You should have received a copy of the GNU Affero General Public License along with ReactKoans. If not, see <https://www.gnu.org/licenses/>.
*/

import React from 'react'
import Layout from '../view/layout.jsx'
import views from '../view/zustand/_zustand.jsx'

const Spaced = (props) => {
  return <div style={{margin: "1vh 2vw 2vh 0vw"}}>
    {props.children}
  </div>
}


export default function Main(props) {
  return <Layout title="Zustand" backPath="/">
    <h1> Zustand </h1>
    <p> <a href="https://www.npmjs.com/package/zustand">Zustand</a> is a hook-based state management library for React, inspired by <a href="https://reactjs.org/blog/2014/05/06/flux.html" target="_blank">Flux</a>, but more lightweight than <a target="_blank" href="https://www.npmjs.com/package/redux">Redux</a>, and with less boilerplate than <a target="_blank" href="https://reactjs.org/docs/context.html">Context</a>. </p>
    <h1> Examples </h1>
    <h2> State sharing in siblings </h2>
    <p>These are 2 independently defined functional components (i.e. 2 different functions in different files).</p>
    <p>They both - separately from each other - instantiate the same zustand store, which has an integer value and functions to increment it and decrement it.</p>
    <p>If you press the +/- buttons in either component, you will see that the state is automatically propagated from one to the other.</p>
    <div className="f-row f-wrap card_row">
      <Spaced>
        <views.BasicUsage/>
      </Spaced>
      <Spaced>
        <views.CrossComponents/>
      </Spaced>
    </div>
    <h2> Updating from outside of a store </h2>
    <p> Zustand stores can <a href="https://github.com/pmndrs/zustand#readingwriting-state-and-reacting-to-changes-outside-of-components">connect with the world outside of react</a>. </p>
    <h2> Sharing data between stores </h2>
    <p>One challenge with Zustand is using data from one store in another store. For example, a session token - which could be managed in a Zustand store that works with an API - may be useful all around the application.</p>
    <ul>
      <li> Vanilla stores </li>
      <li> Relying on updates outside a store + subscribe</li>
      <li> <a href="https://github.com/pmndrs/zustand/wiki/Splitting-the-store-into-separate-slices"> splitting the store </a> </li>
    </ul>
    <h2> Shallow copy </h2>
    <p>To avoid re-drawing a component when irrelevant state changes, i.e. as an optimization, it's possible to select a sub-set of a store's keys for a component using <a target="_blank" href="https://www.notion.so/sardine/Per-client-fees-and-maybe-configs-50f3b89087454de5a0edc39d2b3f989e"> shallow </a> copies. </p>
    <h2>Error handling from inside zustand</h2>
    <p>Combining zustand with react-error-boundary</p>
  </Layout>
}
