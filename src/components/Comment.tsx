import * as React from 'react'
import CommentModel from '../models/Comment'

interface IState {
  left: number
}

interface IProps {
  comment: CommentModel
  dispose: any
}

export default class Comment extends React.Component<IProps, IState> {
  constructor (props) {
    super(props)
    this.state = {
      left: 100
    }
  }

  componentDidMount () {
    const animationInterval = setInterval(() => {
      const left = this.state.left - 0.2
      if (left <= - 25) {
        clearInterval(animationInterval)
        this.props.dispose()
      } else {
        this.setState({ left })
      }
    }, 10)
  }

  render () {
    const c = this.props.comment
    return (
      <div style={{
        position: 'absolute',
        display: 'inline-block',
        left: `${this.state.left}%`,
        height: '20px',
        width: 'auto',
        top: c.top,
        fontSize: '2em'
      }}>
        <span>{c.content}</span>
      </div>
    )
  }
}
