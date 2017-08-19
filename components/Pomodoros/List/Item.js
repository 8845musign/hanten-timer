// @flow

type Props = {
  pomodoro: Object,
}

export default ({ pomodoro }: Props) => {
  console.log(pomodoro)
  return (
    <li>
      {pomodoro.startTime}
    </li>
  )
}
