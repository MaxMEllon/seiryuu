import { ICommentState } from '../models/ICommentState';
import {
  RECIEVE_COMMENT_NAME,
  DISPOSE_COMMENT_NAME,
  CommentActions,
} from '../actions';

export interface RecieveCommentState {
  comments: ICommentState[];
}

const initialState: RecieveCommentState = {
  comments: [],
};

let leatestCommentId = 0;

const deleteComment = (id: number, comments: ICommentState[]) => delete comments[id];

export default function reducer(state: RecieveCommentState = initialState, action: CommentActions): RecieveCommentState {
  switch (action.type) {
    case RECIEVE_COMMENT_NAME: {
      const nextState = Object.assign({}, state);
      const newComment: ICommentState = { content: action.content, id: leatestCommentId++ };
      nextState.comments.push(newComment)
      return nextState;
    }
    case DISPOSE_COMMENT_NAME: {
      const nextState = Object.assign({}, state);
      deleteComment(action.id, nextState.comments);
      return nextState;
    }
    default:
      return state;
  }
}
