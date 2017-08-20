// @flow

import Link from 'next/link'
import List from './List'

export default () => {
  return (
    <section className='section'>
      <div className='container'>
        <h1 className='title is-1'>POMODORS</h1>

        <List />

        <ul>
          <li><Link href='/'><a>> timer</a></Link></li>
        </ul>
      </div>
    </section>
  )
}
