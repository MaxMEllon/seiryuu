import * as React from 'react';

interface Props {
  content: string,
}

export default class Comment extends React.Component<Props,any> {
  constructor(props: Props) {
    super(props);
  }

  render() {
   return (
     <div>
      {this.props.content}
     </div>
   )
  }
}