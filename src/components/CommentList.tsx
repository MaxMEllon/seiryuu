import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../reducers'
import CommentModel from '../models/Comment';
import List from '../models/List';
import { disposeComment } from '../actions';
import { ComponentProps } from './types';

type DispatchActions = {
  disposeById: any;
}

type CommentProps = {
  comments: List<CommentModel>;
}

type Props = CommentProps & ComponentProps & DispatchActions;

type mapStateToPropsType = (state: AppState) => any;
const mapStateToProps: mapStateToPropsType = (state: AppState) => ({
  comments: state.comments,
});

class CommentList extends React.Component<Props, {}> {
  readonly props: Props;

  handleDisposeComment(id: number) {
    this.props.disposeById(id);
  }

  render() {
    return (
      <div className="commentList">
        {
          this.props.comments.map(c => (
            <div key={c.id}>
              <span> {c.content} </span>
              <span onClick={() => this.handleDisposeComment(c.id)}> ❌ </span>
            </div>
          ))
        }
      </div>
    );
  }
}

export default connect<Props, DispatchActions, React.ComponentClass<Props>>(
  mapStateToProps,
  (dispatch: any): DispatchActions => ({
    disposeById: (id: number) => dispatch(disposeComment(id))
  })
)(CommentList)