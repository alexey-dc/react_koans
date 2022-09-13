/*
  This file is part of ReactKoans https://github.com/alexey-dc/react_koans.

  ReactKoans is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

  ReactKoans is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

  You should have received a copy of the GNU Affero General Public License along with ReactKoans. If not, see <https://www.gnu.org/licenses/>.
*/

import React from 'react'
import Layout from '../view/layout.jsx'
import views from '../view/zustand_2/_zustand_2.jsx'

const Spaced = (props) => {
  return <div style={{margin: "1vh 2vw 2vh 0vw"}}>
    {props.children}
  </div>
}


export default function Main(props) {
  return <Layout title="Zustand Persistence" backPath="/">
    <h1>Zustand: client-side persistence</h1>
    <p>Modern web applications often need to store data client-side, e.g. to <a target="_blank" href="https://dev.to/alexeydc/sessions-cookies-vs-localstorage-2h7g">preserve authentication credentials</a> on page reload.</p>
    <p>It's easy to just write data to localStorage/sessionStorage - but inevitably that data influences rendering; naive solutions don't automatically keep views and persisted data in sync.</p>
    <p><a href="https://www.npmjs.com/package/zustand">Zustand</a> comes with <a target="_blank" href="https://github.com/pmndrs/zustand#persist-middleware">persistence middleware</a> out of the box, which can automatically synchronize in-memory data and its persisted counterpart.</p>
    <h1> Examples </h1>
    <section id="zustand_persistence">
      <h2>Keeping zustand in sync with localStorage/sessionStorage</h2>
      <p>Zustand supports <a target="_blank" href="https://github.com/pmndrs/zustand#middleware">middleware</a> for a variety of purposes - including automatically staying in sync with localStorage/sessionStorage.</p>
      <p>The example below leverages the storage middleware; it writes to localStorage - so the value will be kept intact as the page is refreshed or opened on a different tab in the same browser.</p>
      <div className="f-row f-wrap card_row">
        <Spaced>
          <views.PersistenceMiddleware/>
        </Spaced>
      </div>
    </section>

    <section>
      <h2>Writing to sessionStorage</h2>
      <p>Zustand's persistence middleware defaults to <a target="_blank" href="https://github.com/pmndrs/zustand/blob/main/docs/integrations/persisting-store-data.md#getstorage">localStorage</a>. It's possible to configure writing to any storage on a per-store basis, though.</p>
      <p>In the example below, the middleware writes to sessionStorage - which means the data is preserved across refreshes, but is only available to a single tab.</p>
      <div className="f-row f-wrap card_row">
        <Spaced>
          <views.SessionStorageZustand/>
        </Spaced>
      </div>
    </section>

    <section>
      <h2>Zustand + SSR/NextJS: Hydrating Persisted Data</h2>
      <p>There's a caveat to be aware of when relying on Zustand to stay in sync with a persisted client-side store.</p>
      <p>With Server-Side React (SSR), components may be rendered on the backend - which would not have access to the front end data. This would lead to a data consistency issue.</p>
      <p>The two examples above handle this concern by wrapping the view dependent on Zustand's persistence middleware with <a target="_blank" href="https://github.com/alexey-dc/react_koans/blob/main/view/zustand_2/components/hydrating_loader.jsx">{'HydratingLoader'}</a>.</p>
      <p>The component in this example does not wait for hydration before rendering - so changing the value below will lead to errors printed to the browser's JS console on page reload. It's stored in sessionStorage, so the errors will only persist within one tab.</p>
      <div className="f-row f-wrap card_row">
        <Spaced>
          <views.LackOfHydration/>
        </Spaced>
      </div>
    </section>

    <div style={{marginBottom: "33vh"}}></div>
  </Layout>
}
