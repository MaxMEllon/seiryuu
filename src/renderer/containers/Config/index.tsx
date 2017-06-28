import Col from 'muicss/lib/react/col'
import Container from 'muicss/lib/react/container'
import Form from 'muicss/lib/react/form'
import Option from 'muicss/lib/react/option'
import Row from 'muicss/lib/react/row'
import Select from 'muicss/lib/react/select'
import * as React from 'react'
import { connect } from 'react-redux'
import { AllActions, changeTimeLineType } from '../../actions'
import Appbar from '../../components/Config/Appbar/index'
import { TimelineType } from '../../models/Config'
import ConfigModel from '../../models/Config'
import {
  hashtag as hashtagTL,
  user as userTL,
} from '../../models/Config'
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
        <Container>
          <Row>
            <Col md="12">
              <Form>
                <Select defaultValue="option-1">
                  <Option value={userTL} label="ユーザータイムライン" />
                  <Option value={hashtagTL} label="ハッシュタグを指定" />
                </Select>
              </Form>
            </Col>
          </Row>
        </Container>
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
