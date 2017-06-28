import Col from 'muicss/lib/react/col'
import Container from 'muicss/lib/react/container'
import Form from 'muicss/lib/react/form'
import Option from 'muicss/lib/react/option'
import Row from 'muicss/lib/react/row'
import Select from 'muicss/lib/react/select'
import * as React from 'react'
import Appbar from '../../components/Config/Appbar/index'
import {
  hashtag as hashtagTL,
  user as userTL,
} from '../../models/Config'

export default class Config extends React.Component<any, any> {
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
