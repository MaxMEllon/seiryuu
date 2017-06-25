import {
  CommentActions,
  DISPOSE_COMMENT_NAME,
  RECIEVE_COMMENT_NAME
} from '../actions'
import CommentModel from '../models/Comment'
import List from '../models/List'

export interface IAppState {
  comments: List<CommentModel>
}

const initialState: IAppState = {
  comments: new List<CommentModel>()
}

let leatestCommentId = 0
let currentViewingCommentCount = 0

export default function reducer (state: IAppState = initialState, action: CommentActions): IAppState {
  console.log(action)
  switch (action.type) {
    case RECIEVE_COMMENT_NAME: {
      const newComment: CommentModel = new CommentModel(
        action.content,
        leatestCommentId++,
        currentViewingCommentCount++
      )
      currentViewingCommentCount %= 10
      return { comments: state.comments.add(newComment) }
    }
    case DISPOSE_COMMENT_NAME: {
      return { comments: state.comments.remove(action.id) }
    }
    default:
      return state
  }
}
