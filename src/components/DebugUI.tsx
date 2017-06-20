import * as React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state: any) => ({ });

class DebugUI extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button>コメント送信</button>
      </div>
    );
  }
}

export default connect<any, any, any>(
  mapStateToProps,
  (dispatch: any) => ({ dispatch })
)(DebugUI);
