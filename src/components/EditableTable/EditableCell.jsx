import React from 'react';
import { Input, Form, Select as AntSelect } from 'antd';

import { EditableContext } from './EditableFormRow';
import { Select } from '..';

import { CustomerStatusConst } from '../../enums';

const Option = AntSelect.Option;

const renderOptions = data => {
  return Object.keys(data).map(key => (
    <Option key={key} value={key}>
      {data[key]}
    </Option>
  ));
};

class EditableCell extends React.Component {
  state = {
    editing: false,
  };

  toggleEdit = () => {
    const editing = !this.state.editing;

    this.setState({ editing }, () => {
      if (editing) {
        this.input && this.input.focus();
      }
    });
  };

  save = e => {
    const { record, handleSave } = this.props;

    this.form.validateFields((error, values) => {
      if (error && error[e.currentTarget.id]) {
        return;
      }

      this.toggleEdit();
      handleSave({ ...record, ...values });
    });
  };

  renderCell = form => {
    this.form = form;
    const { children, dataIndex, record, title, isSelect } = this.props;
    const { editing } = this.state;

    if (editing) {
      return (
        <Form.Item style={{ margin: 0 }}>
          {form.getFieldDecorator(dataIndex, {
            // rules: [
            //   {
            //     required: true,
            //     message: `Lütfen ${title} giriniz.`,
            //   },
            // ],
            initialValue: record[dataIndex],
          })(
            isSelect ? (
              <Select
                value={record ? record.status : undefined}
                placeholder="Statü"
                tooltipTitle="Statü seçiniz"
                options={renderOptions(CustomerStatusConst)}
                onBlur={this.save}
                onPressEnter={this.save}
              />
            ) : (
              <Input
                ref={node => (this.input = node)}
                onPressEnter={this.save}
                onBlur={this.save}
              />
            ),
          )}
        </Form.Item>
      );
    }

    if (!editing) {
      return (
        <div
          className="editable-cell-value-wrap"
          style={{ paddingRight: 24, minHeight: '2em' }}
          onClick={this.toggleEdit}
        >
          {children}
        </div>
      );
    }
  };

  render() {
    const {
      editable,
      dataIndex,
      title,
      record,
      index,
      handleSave,
      children,
      ...restProps
    } = this.props;

    return (
      <td {...restProps}>
        {editable ? (
          <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
        ) : (
          children
        )}
      </td>
    );
  }
}

export default EditableCell;
