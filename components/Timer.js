const convertToSec = (milliseconds) => {
  return Math.floor(milliseconds / 1000)
}

export default ({ startTimer, pastTime }) => {
  return (
    <div>
      <button onClick={startTimer}>startTimer</button>
      rest time : {convertToSec(pastTime)} sec
    </div>
  )
}
