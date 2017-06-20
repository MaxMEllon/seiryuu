import CommentModel from '../models/Comment';
import List from '../models/List';
import {
  RECIEVE_COMMENT_NAME,
  DISPOSE_COMMENT_NAME,
  CommentActions,
} from '../actions';

export interface AppState {
  comments: List<CommentModel>;
}

const initialState: AppState = {
  comments: new List<CommentModel>(),
};

let leatestCommentId = 0;

export default function reducer(state: AppState = initialState, action: CommentActions): AppState {
  switch (action.type) {
    case RECIEVE_COMMENT_NAME: {
      const nextState = Object.assign({}, state);
      nextState.comments = state.comments.clone();
      const newComment: CommentModel = new CommentModel(action.content, leatestCommentId++);
      nextState.comments.add(newComment);
      return nextState;
    }
    case DISPOSE_COMMENT_NAME: {
      const nextState = Object.assign({}, state);
      nextState.comments = state.comments.clone();
      nextState.comments.remove(action.id);
      return nextState;
    }
    default:
      return state;
  }
}
