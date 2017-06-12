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
    <section>
      <h2>Add Task</h2>

      <form onSubmit={onSubmit(add, name)}>
        <fieldset>
          <label>name</label>
          <input type='text' value={name} onChange={onChange(change, 'name')} />
        </fieldset>

        <button type='submit' disabled={name === '' || !name}>add</button>
      </form>
    </section>
  )
}
