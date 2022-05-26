/*
  This file is part of ReactKoans https://github.com/alexey-dc/react_koans.

  ReactKoans is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

  ReactKoans is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

  You should have received a copy of the GNU Affero General Public License along with ReactKoans. If not, see <https://www.gnu.org/licenses/>.
*/

import React from 'react'
import Head from 'next/head'

const renderBack = (backPath) => {
  return <a style={{position: "fixed", fontSize: "3vh"}} href={backPath}> Back </a>
}

export default class Layout extends React.Component {
  constructor(props) {
    /* title, backPath */
    super(props)
    this.state = {
      ready: false
    }
  }

  render() {
    const title = this.props.title || "React Koans"
    return <div>
      <Head>
        <title> {title} </title>
        <meta name="description" content="React koans"/>
        <meta name="keywords" content="react"/>
        <meta name="author" content="Alexey Chernikov"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
      </Head>
      {this.props.backPath ? renderBack(this.props.backPath) : "" }
      <div style={{
        marginLeft: "100px",
        paddingTop: "16px"
      }}>
        {this.props.children}
      </div>
    </div>
  }

}
