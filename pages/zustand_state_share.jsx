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

    <section>
      <h2> State sharing in sibling functional components </h2>
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
    </section>
    
    <section>
      <h2>Splitting a large Zustand store up</h2>
      <p>As the state of the application grows, it may be helpful to compartmentalize the data in Zustand.</p>
      <p>Zustand recommends using the <a target="_blank" href="https://github.com/pmndrs/zustand/blob/main/docs/guides/typescript.md#slices-pattern">Slices pattern</a>, which is demonstrated in the example below.</p>
      <div className="f-row f-wrap card_row">
        <Spaced>
          <views.SplitStores/>
        </Spaced>
      </div>
    </section>

    <section>
      <h2>Using Zustand state across stores</h2>
      <p>The problem with the example above is that data sources need to be aware of all their dependents, and update the dependents.</p>
      <p>This makes it harder to develop modular data structures - since new modules require updating old modules.</p>
      <p>It's possible to reverse the relationship - by subscribing to Zustand state changes explicitly from dependent stores. In this example, subscriptions are used to build a self-updating dependent Zustand store - liberating parent data sources from needing to know about dependent values.</p>
      <p>Notice that the <span style={{color: 'red'}}>red</span> value below matches the value at the top of the page: unlike useComboStore, this approach allows sharing state across unrelated stores that don't have direct access to each other's state (useSum and useCounter).</p>
      <div className="f-row f-wrap card_row">
        <Spaced>
          <views.ShareAcrossStores/>
        </Spaced>
      </div>
    </section>
    <div style={{marginBottom: "33vh"}}></div>
  </Layout>
}
