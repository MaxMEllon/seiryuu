export interface ICommentState {
  content: string
  id: number
  bottom: string
}

export default class CommentModel implements ICommentState {
  readonly content: string
  readonly id: number
  private _bottom: number

  get bottom(): string {
    // TODO: 最下部まできたら一番上に
    return `${this._bottom + 1}em`
  }

  constructor(content, id, bottom) {
    this.content = content
    this.id = id
    this._bottom = bottom % 10
  }
}
