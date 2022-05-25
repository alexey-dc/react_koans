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
  return <div style={{margin: "1vh 1vw 1vh 1vw"}}>
    {props.children}
  </div>
}

export default function Main(props) {
  return <Layout backPath="/">
    <h1>Error handling in functional components</h1>
    <div className="f-row f-wrap">
      <Spaced>
        <views.UnhandledError/>
      </Spaced>
      <Spaced>
        <views.BasicErrorBoundary/>
      </Spaced>
      <Spaced>
        <views.UseEffectError/>
      </Spaced>

      <Spaced>
        <views.UseEffectErrorBoundary/>
      </Spaced>
      <Spaced>
        <views.PromiseErrorBoundary/>
      </Spaced>
      <Spaced>
        <views.PromiseErrorBoundaryUseEffect/>
      </Spaced>
      <Spaced>
        <views.PromiseErrorHandling/>
      </Spaced>
    </div>
  </Layout>
}
