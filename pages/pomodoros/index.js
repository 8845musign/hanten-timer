import React from 'react'
import Head from 'next/head'
import withRedux from 'next-redux-wrapper'

import indexStore from '../../indexStore'

import Pomodoros from '../../components/Pomodoros'

class Index extends React.Component {
  render () {
    return (
      <div>
        <Head>
          <title>Pomodoros</title>
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link rel='stylesheet' type='text/css' href='/static/css/bulma.css' />
        </Head>
        <Pomodoros />
      </div>
    )
  }
}

export default withRedux(indexStore)(Index)
