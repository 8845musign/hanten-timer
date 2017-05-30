export default ({ startTimer, restTime }) => {
  return (
    <div>
      <button onClick={startTimer}>startTimer</button>
      rest time : {restTime} sec
    </div>
  )
}
