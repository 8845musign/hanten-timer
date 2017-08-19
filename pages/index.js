import React from 'react'
import Head from 'next/head'
import withRedux from 'next-redux-wrapper'

import indexStore from './indexStore'

import TimerContainer from '../components/timer/container'

class Index extends React.Component {
  render () {
    return (
      <div>
        <Head>
          <title>Timer</title>
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link rel='stylesheet' type='text/css' href='/static/css/bulma.css' />
        </Head>

        <TimerContainer />
      </div>
    )
  }
}

export default withRedux(indexStore)(Index)
