import * as React from 'react'
import CommentModel from '../../models/Comment'
import * as style from './style.css'
interface IState { left: number
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
    const { left } = this.state
    return (
      <div
        className={style.commentContainer}
        style={{ left: `${left}%`, top: c.top }}
      >
        <span>{c.content}</span>
      </div>
    )
  }
}
