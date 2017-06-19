import { ICommentState } from '../models/ICommentState';
import { RECIEVE_COMMENT_NAME, CommentActions } from '../actions';

export interface RecieveCommentState {
  comments: ICommentState[];
}

const initialState: RecieveCommentState = {
  comments: [],
};

export default function reducer(state: RecieveCommentState = initialState, action: CommentActions): RecieveCommentState {
  switch (action.type) {
    case RECIEVE_COMMENT_NAME:
      const nextState = Object.assign({}, state);
      const newComment: ICommentState = { content: action.content };
      nextState.comments.push(newComment)
      return nextState;
    default:
      return state;
  }
}
