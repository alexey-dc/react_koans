/*
  This file is part of ReactKoans https://github.com/alexey-dc/react_koans.

  ReactKoans is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

  ReactKoans is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

  You should have received a copy of the GNU Affero General Public License along with ReactKoans. If not, see <https://www.gnu.org/licenses/>.
*/

import React from 'react'
import Layout from '../view/layout.jsx'
import views from '../view/hooks_store/_hooks_store.jsx'

const Spaced = (props) => {
  return <div style={{margin: "1vh 2vw 2vh 0vw"}}>
    {props.children}
  </div>
}


export default function Main(props) {
  return <Layout title="Hooks and Application State" backPath="/">
    <section>
      <h1> Hooks and Application State </h1>
      <p>Sharing state across components is one of the most common problems in React, since there is no out-of-the-box solution.</p>
      <p>There is a plethora of paradigms and libraries: <a target="_blank" href="https://reactjs.org/blog/2014/05/06/flux.html">Flux</a> and its <a target="_blank" href="https://github.com/voronianski/flux-comparison">countless implementations</a>, <a target="_blank" href="https://reactjs.org/docs/context.html">Context</a>, <a target="_blank" href="https://github.com/pmndrs/zustand">Zustand</a>, ...</p>
      <p>Functional components and hooks bring new constraints and tools, further proliferating possible approaches.</p>
      <p>This section explores navigating application state in React on top of functional components and hooks - without a state framework.</p>
    </section>

    <section>
      <h1> Examples </h1>
      <h2> Raw hooks: the problem </h2>
      <p>Native react hooks - like useState - do not come with an out of the box way of sharing state across components</p>
      <p>The example below has 2 components that share a stateful hook; the data is not shared.</p>
      <div className="f-row f-wrap card_row">
        <Spaced>
          <views.NaiveStoreHooks/>
        </Spaced>
      </div>
      <h2>Ad hoc solution</h2>
      <div className="f-row f-wrap card_row">
        <Spaced>
          <views.SharedHookState/>
        </Spaced>
      </div>
    </section>

    <section style={{marginBottom: "32vh"}}>
      <h1>Conclusions</h1>
      <p>React does not prescribe a method of sharing state across functional components.</p>
      <p>Hooks allow simple ad hoc solutions - but in a production app, it's worth evaluating existing approaches like <a href="/zustand_state_share">Zustand</a>, which take care of common concerns like persisting application state.</p>
    </section>

  </Layout>
}
