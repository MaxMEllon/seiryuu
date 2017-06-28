import * as Appbar from 'muicss/lib/react/appbar'
import * as React from 'react'

export default class Appber extends React.Component<{}> {
  render() {
    return (
      <Appbar>
        <table width="100%">
          <tbody>
            <tr>
              <td className="mui--appbar-height">Config</td>
            </tr>
          </tbody>
        </table>
      </Appbar>
    )
  }
}
