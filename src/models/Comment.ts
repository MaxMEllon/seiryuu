export interface ICommentState {
  content: string;
  id: number;
};

export default class CommentModel implements ICommentState {
  readonly content: string;
  readonly id: number;

  constructor(content, id) {
    this.content = content;
    this.id = id;
  }
}