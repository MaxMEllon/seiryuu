import { AllActions } from '../actions'
import * as actions from '../actions'
import CommentModel from '../models/Comment'
import ConfigModel from '../models/Config'
import List from '../models/List'

export interface IAppState {
  comments: List<CommentModel>
  config: ConfigModel
}

const initialState: IAppState = {
  comments: new List<CommentModel>(),
  config: new ConfigModel(),
}

let leatestCommentId = 0
let currentViewingCommentCount = 0

export default function reducer(state: IAppState = initialState, action: AllActions): IAppState {
  switch (action.type) {
    case actions.RECIEVE_COMMENT_NAME: {
      const newComment: CommentModel = new CommentModel({
        bottom: currentViewingCommentCount++,
        content: action.content,
        id: leatestCommentId++,
        name: action.name,
      })
      currentViewingCommentCount %= 10
      return {
        comments: state.comments.add(newComment),
        config: state.config,
      }
    }
    case actions.DISPOSE_COMMENT_NAME: {
      return {
        comments: state.comments.remove(action.id),
        config: state.config,
      }
    }
    case actions.CONFIG_SYNC_NAME: {
      return {
        comments: state.comments,
        config: action.config,
      }
    }
    default:
      return state
  }
}
