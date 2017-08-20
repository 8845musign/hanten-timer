// @flow

import classNames from 'classnames'

type Props = {
  name: String,
  change: Function,
  add: Function,
  validAdd: boolean
}

export default ({ name, change, add, validAdd }: Props) => {
  const onChange = (e: SyntheticInputEvent) => {
    change(e.target.value)
  }

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault()

    add()
  }

  const inputCss = classNames(
    'input',
    { 'is-danger': !validAdd }
  )

  const renderErrorMsg = () => {
    if (validAdd) {
      return null
    } else {
      return <p className='help is-danger'>duplicate name</p>
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div className='field'>
        <label className='label'>name</label>
        <input className={inputCss} type='text' value={name} onChange={onChange} />
        {renderErrorMsg()}
      </div>

      <button className='button is-primary' type='submit' disabled={!validAdd || name === '' || !name}>add</button>
    </form>
  )
}
