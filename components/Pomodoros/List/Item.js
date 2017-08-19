// @flow

type Props = {
  pomodoro: Object,
}

export default ({ pomodoro }: Props) => {
  return (
    <li>
      {pomodoro.startTime}
    </li>
  )
}
