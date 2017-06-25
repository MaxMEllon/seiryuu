import * as React from 'react'
import { connect } from 'react-redux'
import { disposeComment } from '../actions'
import Comment from '../components/Comment'
import CommentModel from '../models/Comment'
import List from '../models/List'
import { AppState } from '../reducers'
import { ComponentProps } from '../types'

interface DispatchActions {
  disposeById: any
}

interface CommentProps {
  comments: List<CommentModel>
}

type Props = CommentProps & ComponentProps & DispatchActions

type mapStateToPropsType = (state: AppState) => any
const mapStateToProps: mapStateToPropsType = (state: AppState) => ({
  comments: state.comments
})

class CommentList extends React.Component<Props, {}> {
  readonly props: Props

  handleDisposeComment (id: number) {
    this.props.disposeById(id)
  }

  render () {
    return (
      <div
        className='commentList'
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: 530000
        }}
      >
        {
          this.props.comments.map((c) => (
            <Comment
              key={c.id}
              comment={c}
              dispose={() => this.handleDisposeComment(c.id)}
            />
          ))
        }
      </div>
    )
  }
}

export default connect<CommentProps, DispatchActions, React.ComponentClass<Props>>(
  mapStateToProps,
  (dispatch: any): DispatchActions => ({
    disposeById: (id: number): void => dispatch(disposeComment(id))
  })
)(CommentList)
