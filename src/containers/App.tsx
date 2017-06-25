import * as React from 'react'
import CommentList from './CommentList'
import DebugUI from './DebugUI'

export default class App extends React.Component<any, any> {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <CommentList />
        <DebugUI />
      </div>
    )
  }
}
