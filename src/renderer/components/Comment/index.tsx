import * as React from 'react'
import CommentModel from '../../models/Comment'
import { IComponentProps } from '../../types'
import * as style from './style.css'

interface IState {
  left: number
}

interface IProps {
  comment: CommentModel
  dispose: any
}

type Props = IProps & IComponentProps

export default class Comment extends React.Component<Props, IState> {
  constructor(props) {
    super(props)
    this.state = {
      left: 100,
    }
  }

  componentDidMount() {
    const animationInterval = setInterval(() => {
      const { length } = this.props.comment.content
      const left = (this.state.left - 0.2) - length * 0.002
      if (left <= - length * 2.3) {
        clearInterval(animationInterval)
        this.props.dispose()
      } else {
        this.setState({ left })
      }
    }, 10)
  }

  render() {
    const { bottom, content } = this.props.comment
    const { left } = this.state
    return (
      <div
        className={style.commentContainer}
        style={{ left: `${left}%`, bottom }}
      >
        <span>{content}</span>
      </div>
    )
  }
}
