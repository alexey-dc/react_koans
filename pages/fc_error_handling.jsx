/*
  This file is part of ReactKoans https://github.com/alexey-dc/react_koans.

  ReactKoans is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

  ReactKoans is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

  You should have received a copy of the GNU Affero General Public License along with ReactKoans. If not, see <https://www.gnu.org/licenses/>.
*/

import React from 'react'
import Layout from '../view/layout.jsx'

import views from '../view/fc_error_handling/_fc_error_handling.jsx'

const Spaced = (props) => {
  return <div style={{margin: "1vh 2vw 2vh 0vw"}}>
    {props.children}
  </div>
}

export default function Main(props) {
  return <Layout backPath="/">
    <h1>Error handling in functional components</h1>
    <p> This examples walks through a series of different situations in which an error may be thrown, explores what happens, and what can be done about it. </p>
    <p> Each card has a link to its source code (on <a target="blank" href="https://github.com/alexey-dc/react_koans/tree/main/view/fc_error_handling">GitHub</a>) at the top, as well as a summary of the setup. </p>
    <div style={{marginBottom: "4vh"}}> </div>
    <h2> Problem 1: errors in components w/o promises </h2>
    <p> Errors thrown in components will cause the page to crash. React has a standard solution to this: <a target="blank" href="https://reactjs.org/docs/error-boundaries.html"> Error Boundaries </a> </p>
    <div className="f-row f-wrap card_row">
      <Spaced>
        <views.UnhandledError/>
      </Spaced>
      <Spaced>
        <views.UseEffectError/>
      </Spaced>
      <Spaced>
        <views.BasicErrorBoundary/>
      </Spaced>
      <Spaced>
        <views.UseEffectErrorBoundary/>
      </Spaced>
    </div>
    <div style={{marginBottom: "5vh"}}> </div>
    <h2> Problem 2: errors in components in promises  </h2>
    <p> However, Error Boundaries do not work for async functions/promises. </p>
    <div className="f-row f-wrap card_row">
      <Spaced>
        <views.PromiseErrorBoundary/>
      </Spaced>
      <Spaced>
        <views.PromiseErrorBoundaryUseEffect/>
      </Spaced>
    </div>
    <h3> Solution 1: react-error-boundary package </h3>
    <div className="f-row f-wrap card_row">
      <Spaced>
        <views.PromiseReactErrorBoundary/>
      </Spaced>
    </div>
    <h3> Solution 2: global event system </h3>
    <div className="f-row f-wrap card_row">
      <Spaced>
        <views.PromiseErrorHandling/>
      </Spaced>
    </div>
    <h2> Conclusion </h2>
    <p> The hard problem in handling errors in functional components in React is dealing with errors from async functions/promises. </p>
    <p> Two solutions are presented: via <a target="blank" href="https://www.npmjs.com/package/react-error-boundary">react-error-boundary</a> and via a <a target="blank" href="https://github.com/alexey-dc/react_koans/blob/main/frontend_lib/event_bus.js#L17">global event mechanism</a>. </p>
    <p> <b>react-error-boundary</b> can be a good way to take advantage of a standard global error handling mechanism on a per-component level. </p>
    <p> However, for general-purpose tools (e.g. an internal http client that wraps a backend API) that exist outside of components, or that would benefit from not having to think about error handling each time - it may make sense to opt for a global event mechanism to tie the world of react with the outside world.</p>
    <div style={{marginBottom: "30vh"}}> </div>
  </Layout>
}
