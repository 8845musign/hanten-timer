// @flow

const renderTask = (tasks) => {
  const renderTasks = []

  Object.keys(tasks).forEach((id) => {
    const task = tasks[id]
    renderTasks.push(
      <li className='item' key={id}>
        <style jsx>{`
          li {
            margin-bottom: 1em;
            padding-bottom: 0.25em;
            border-bottom: 1px solid #333;
          }
        `}</style>
        {task.name}
      </li>
    )
  })

  return renderTasks
}

type Props = {
  tasks: Object
}

export default ({ tasks }: Props) => {
  return (
    <ul>
      <style jsx>{`
        ul {
          padding-top: 1em;
        }
      `}</style>
      {renderTask(tasks)}
    </ul>
  )
}
