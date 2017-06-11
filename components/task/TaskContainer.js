import { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { change } from '../../redux/pages/task/add'
import { add } from '../../redux/modules/shared/tasks'

import Add from './Add'

class TaskContainer extends Component {
  render () {
    return (
      <div>
        <Add
          name={this.props.name}
          change={this.props.change}
          add={this.props.add}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.add.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    change: bindActionCreators(change, dispatch),
    add: bindActionCreators(add, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer)
