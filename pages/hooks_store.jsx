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
      <p>Sharing state across components is one of the most common problems in React, since it does not come with an out-of-the-box solution.</p>
      <p>There are countless approaches and paradigms: <a target="_blank" href="https://reactjs.org/blog/2014/05/06/flux.html">Flux</a> and its <a target="_blank" href="https://github.com/voronianski/flux-comparison">countless implementations</a>, <a target="_blank" href="https://reactjs.org/docs/context.html">Context</a>, <a target="_blank" href="https://github.com/pmndrs/zustand">Zustand</a>, ...</p>
      <p>Functional components and hooks bring a new set of tools to the field, which further proliferates the possible approaches.</p>
      <p>This section explores navigating application state in React on top of functional components - without a state framework.</p>
    </section>

    <section>
      <h1> Diving in </h1>
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
      <p>React does not perscribe a way to share state across components.</p>
      <p>In particular, for functional components, there is no out-of-the-box hook that allows sharing application-wide state and ensuring its consistency.</p>
      <p>A basic solution for sharing state using hooks is presented above - but there are many solutions to the problem out there, varying in sophistication.</p>
      <p><a href="/zustand_state_share">Zustand</a> is a minimal hook-based application state management framework. It's compatible with redux tools, and yet offers one of the most compact <a target="_blank" href="https://reactjs.org/blog/2014/05/06/flux.html">Flux</a> implementations - for functional components. </p>
    </section>

  </Layout>
}
