import Col from 'muicss/lib/react/col'
import Container from 'muicss/lib/react/container'
import Form from 'muicss/lib/react/form'
import Option from 'muicss/lib/react/option'
import Row from 'muicss/lib/react/row'
import Select from 'muicss/lib/react/select'
import * as React from 'react'
import {
  hashtag as hashtagTL,
  user as userTL,
} from '../../../models/Config'
import { TimelineType } from '../../../models/Config'

interface IProps {
  changeTimeLineType: (timelineType: TimelineType) => void
}

export default class FormComponent extends React.Component<IProps, {}> {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange(e: any) {
    this.props.changeTimeLineType(e.target.value)
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md="12">
            <Form>
              <Select defaultValue="option-1" onChange={this.onChange}>
                <Option value={userTL} label="ユーザータイムライン" />
                <Option value={hashtagTL} label="ハッシュタグを指定" />
              </Select>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}
