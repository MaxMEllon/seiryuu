export interface ICommentState {
  content: string
  id: number
  top: string
}

export default class CommentModel implements ICommentState {
  readonly content: string
  readonly id: number
  private _top: number

  get top (): string {
    // TODO: 最下部まできたら一番上に
    return `${this._top}em`
  }

  constructor (content, id, top) {
    this.content = content
    this.id = id
    this._top = top
  }
}
