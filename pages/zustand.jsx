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
    <div className="f-row f-wrap card_row">
      <Spaced>
        <views.BasicUsage/>
      </Spaced>
      <Spaced>
        <views.CrossComponents/>
      </Spaced>
    </div>
  </Layout>
}
