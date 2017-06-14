// @flow

import Link from 'next/link'

const renderTask = (tasks) => {
  const renderTasks = []

  Object.keys(tasks).forEach((id) => {
    const task = tasks[id]
    renderTasks.push(<li key={id}>{task.name}</li>)
  })

  return renderTasks
}

type Props = {
  tasks: Object
}

export default ({ tasks }: Props) => {
  return (
    <div>
      <ul>
        {renderTask(tasks)}
      </ul>

      <Link href='/'><a>timer</a></Link>
    </div>
  )
}
