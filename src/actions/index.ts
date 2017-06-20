import { Action } from 'redux';

export const RECIEVE_COMMENT_NAME = 'comment/recieve';
export type RECIEVE_COMMENT_TYPE = typeof RECIEVE_COMMENT_NAME;

interface RecieveCommentAction extends Action {
  type: RECIEVE_COMMENT_TYPE;
  content: string;
}

export const recieveComment = (content: string): RecieveCommentAction => ({
  type: RECIEVE_COMMENT_NAME,
  content,
});

export const DISPOSE_COMMENT_NAME = 'comment/dispose';
export type DISPOSE_COMMENT_TYPE = typeof DISPOSE_COMMENT_NAME;

interface DisposeCommentAction extends Action {
  type: DISPOSE_COMMENT_TYPE;
  id: number;
}

export const disposeComment = (id: number): DisposeCommentAction => ({
  type: DISPOSE_COMMENT_NAME,
  id,
})

export type CommentActions = RecieveCommentAction
  | DisposeCommentAction;
