import * as React from 'react'
import { connect } from 'react-redux'
import { recieveComment } from '../../actions'
import * as style from './style.css'

const mapStateToProps = (state: any) => ({ })

class DebugUI extends React.Component<any, any> {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    this.props.submit('sample comment')
  }

  render() {
    return (
      <div className={style.container}>
        <button onClick={this.onClick}>コメント送信</button>
      </div>
    )
  }
}

export default connect<any, any, any>(
  mapStateToProps,
  (dispatch: any) => ({
    submit: (content: string) => dispatch(recieveComment(content)),
  }),
)(DebugUI)
