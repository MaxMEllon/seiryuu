import { Action } from 'redux';
import { ICommentState } from '../models/ICommentState';

const RECIEVE_COMMENT_NAME = 'comment/recieve';
type RECIEVE_COMMENT_TYPE = typeof RECIEVE_COMMENT_NAME;

interface RecieveCommentAction extends Action {
  type: RECIEVE_COMMENT_TYPE;
  content: string;
}

export const recieveComment = (content: string): RecieveCommentAction => ({
  type: RECIEVE_COMMENT_NAME,
  content: content,
});

export interface RecieveCommentState {
  comments: ICommentState[];
}

