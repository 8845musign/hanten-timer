// @flow

type Props = {
  name: String,
  change: Function,
  add: Function,
}

export default ({ name, change, add }: Props) => {
  const onChange = (e: SyntheticInputEvent) => {
    change(e.target.value)
  }

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault()

    add()
  }

  return (
    <form onSubmit={onSubmit}>
      <div className='field'>
        <label className='label'>name</label>
        <input className='input' type='text' value={name} onChange={onChange} />
      </div>

      <button className='button is-primary' type='submit' disabled={name === '' || !name}>add</button>
    </form>
  )
}
