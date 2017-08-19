// @flow

const onSubmit = (add: Function, name: String) => {
  return (e) => {
    e.preventDefault()

    add(name)
  }
}

const onChange = (change: Function, key: string) => e => {
  change(key, e.target.value)
}

type Props = {
  name: String,
  change: Function,
  add: Function,
}

export default ({ name, change, add }: Props) => {
  return (
    <form onSubmit={onSubmit(add, name)}>
      <div className='field'>
        <label className='label'>name</label>
        <input className='input' type='text' value={name} onChange={onChange(change, 'name')} />
      </div>

      <button className='button is-primary' type='submit' disabled={name === '' || !name}>add</button>
    </form>
  )
}
