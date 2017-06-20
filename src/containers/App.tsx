import * as React from 'react';
import DebugUI from '../components/DebugUI';
import CommentList from '../components/CommentList';

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
