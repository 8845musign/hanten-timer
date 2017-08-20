// @flow

type Props = {
  task: String
}

export default ({ task }: Props) => {
  return (
    <li>
      {task}
    </li>
  )
}
