import * as React from 'react';
import { connect } from 'react-redux';
import { CommentState } from '../reducers'

interface Props extends CommentState {
  className?: string;
  style?: React.CSSProperties;
  children?: any;
}

const mapStateToProps = (state: CommentState) => ({
  comments: state.comments,
});

class CommentList extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="commentList">
        {
          this.props.comments.map(c => (
            <div>{c.content}</div>
          ))
        }
      </div>
    );
  }
}

export default connect<any, any, any>(
  mapStateToProps,
  (dispatch: any) => ({ })
)(CommentList);
