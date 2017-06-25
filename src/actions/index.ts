import { Action } from 'redux'

export const RECIEVE_COMMENT_NAME = 'comment/recieve'
export type RECIEVE_COMMENT_TYPE = typeof RECIEVE_COMMENT_NAME

interface IRecieveCommentAction extends Action {
  type: RECIEVE_COMMENT_TYPE
  content: string
}

export const recieveComment = (content: string): IRecieveCommentAction => ({
  content,
  type: RECIEVE_COMMENT_NAME
})

export const DISPOSE_COMMENT_NAME = 'comment/dispose'
export type DISPOSE_COMMENT_TYPE = typeof DISPOSE_COMMENT_NAME

interface IDisposeCommentAction extends Action {
  type: DISPOSE_COMMENT_TYPE
  id: number
}

export const disposeComment = (id: number): IDisposeCommentAction => ({
  id,
  type: DISPOSE_COMMENT_NAME
})

export type CommentActions = IRecieveCommentAction
  | IDisposeCommentAction
