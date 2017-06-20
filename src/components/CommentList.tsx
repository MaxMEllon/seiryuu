import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../reducers'
import CommentModel from '../models/Comment';
import List from '../models/List';

type CommentProps = {
  comments: List<CommentModel>;
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

  render() {
    console.log(this.props.comments.map((item) => item.content))
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

export default connect(
  mapStateToProps,
  () => ({})
)<ComponentProps>(CommentList)
