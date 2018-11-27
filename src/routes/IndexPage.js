import React from 'react';
import { Form } from "antd";

import FnPlugin from './fnPlugin';

class IndexPage extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        {
          getFieldDecorator("test")(
            <FnPlugin />
          )
        }
      </div>
    );
  }
}

export default Form.create()(IndexPage);
