export interface ICommentState {
  content: string
  id: number
  name: string
  bottom: string
}

export default class CommentModel implements ICommentState {
  readonly content: string
  readonly id: number
  readonly name: string
  private _bottom: number

  get bottom(): string {
    return `${this._bottom + 1}em`
  }

  constructor({ content, name, id, bottom }) {
    this.content = content
    this.name = name
    this.id = id
    this._bottom = bottom % 10
  }
}
