import { Action } from 'redux'

export const RECIEVE_COMMENT_NAME = 'comment/recieve'
export type RECIEVE_COMMENT_TYPE = typeof RECIEVE_COMMENT_NAME

interface IRecieveCommentAction extends Action {
  type: RECIEVE_COMMENT_TYPE
  content: string
  name: string
}

export const recieveComment = (content: string, name: string): IRecieveCommentAction => ({
  content,
  name,
  type: RECIEVE_COMMENT_NAME,
})

export const DISPOSE_COMMENT_NAME = 'comment/dispose'
export type DISPOSE_COMMENT_TYPE = typeof DISPOSE_COMMENT_NAME

interface IDisposeCommentAction extends Action {
  type: DISPOSE_COMMENT_TYPE
  id: number
}

export const disposeComment = (id: number): IDisposeCommentAction => ({
  id,
  type: DISPOSE_COMMENT_NAME,
})

export const APPLICATION_BOOT_NAME = 'application/boot'
export type APPLICATION_BOOT_TYPE = typeof APPLICATION_BOOT_NAME

interface IBootApplicationAction extends Action {
  type: APPLICATION_BOOT_TYPE
}

export const bootApplication = (): IBootApplicationAction => ({
  type: APPLICATION_BOOT_NAME,
})

export const APPLICATION_STOP_NAME = 'application/stop'
export type APPLICATION_STOP_TYPE = typeof APPLICATION_STOP_NAME

interface IStopApplicationAction extends Action {
  type: APPLICATION_STOP_TYPE
}

export const stopApplication = (): IStopApplicationAction => ({
  type: APPLICATION_STOP_NAME,
})

export type CommentActions = IRecieveCommentAction
  | IDisposeCommentAction
  | IBootApplicationAction
  | IStopApplicationAction
