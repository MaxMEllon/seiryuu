import * as React from 'react'
import { connect } from 'react-redux'
import { recieveComment } from '../actions'

const mapStateToProps = (state: any) => ({ })

class DebugUI extends React.Component<any, any> {
  constructor (props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  onClick () {
    this.props.submit('sample')
  }

  render () {
    return (
      <div style={{
        position: 'absolute',
        bottom: 0,
        zIndex: 123456789
      }}>
        <button
          onClick={this.onClick}
        >コメント送信</button>
      </div>
    )
  }
}

export default connect<any, any, any>(
  mapStateToProps,
  (dispatch: any) => ({
    submit: (content: string) => dispatch(recieveComment(content))
  })
)(DebugUI)
