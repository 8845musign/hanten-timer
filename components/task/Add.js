const onSubmit = (add, name) => {
  return (e) => {
    e.preventDefault()

    add(name)
  }
}

const onChange = (change, key) => e => {
  change(key, e.target.value)
}

export default ({ name, change, add }) => {
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
