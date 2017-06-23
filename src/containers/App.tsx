import * as React from 'react';
import DebugUI from './DebugUI';
import CommentList from './CommentList';

export default class App extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <CommentList />
        <DebugUI />
      </div>
    );
  }
}
