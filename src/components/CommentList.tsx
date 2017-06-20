import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../reducers'
import CommentModel from '../models/Comment';
import List from '../models/List';
import { disposeComment } from '../actions';

type CommentProps = {
  comments: List<CommentModel>;
  disposeById: any;
}

type ComponentProps = {
  className?: string;
  style?: React.CSSProperties;
  children?: any;
}

type Props = CommentProps & ComponentProps;

type mapStateToPropsType = (state: AppState) => any;
const mapStateToProps: mapStateToPropsType = (state: AppState) => ({
  comments: state.comments,
});

class CommentList extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  handleDisposeComment(id: number) {
    this.props.disposeById(id);
  }

  render() {
    console.log(this.props.comments.map((item) => item.content))
    return (
      <div className="commentList">
        {
          this.props.comments.map(c => (
            <div>
              <span> {c.content} </span>
              <span onClick={() => this.handleDisposeComment(c.id)}> ❌ </span>
            </div>
          ))
        }
      </div>
    );
  }
}

export default connect<any, any, any>(
  mapStateToProps,
  (dispatch: any) => ({
    disposeById: (id: number) => dispatch(disposeComment(id))
  })
)(CommentList)