import * as React from 'react'
import { connect } from 'react-redux'
import { AllActions, changeTimeLineType } from '../../actions'
import Appbar from '../../components/Config/Appbar'
import Form from '../../components/Config/Form'
import { TimelineType } from '../../models/Config'
import ConfigModel from '../../models/Config'
import { IAppState } from '../../reducers'
import { IComponentProps } from '../../types'

interface IDispatchActions {
  changeTimeLineType: (type: TimelineType) => AllActions
}

interface IConfigProps {
  config: ConfigModel
}

type Props = IConfigProps & IComponentProps & IDispatchActions

class Config extends React.Component<Props, void> {
  render() {
    return (
      <div>
        <Appbar />
        <Form
          changeTimeLineType={this.props.changeTimeLineType}
        />
      </div>
    )
  }
}

export default connect<IConfigProps, IDispatchActions, React.ComponentClass<any>>(
  (state: IAppState): IConfigProps => ({
    config: state.config,
  }),
  (dispatch: Redux.Dispatch<AllActions>): IDispatchActions => ({
    changeTimeLineType: (timelineType: TimelineType) => (
      dispatch(changeTimeLineType(timelineType))
    ),
  }),
)(Config)
