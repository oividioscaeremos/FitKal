import React from 'react';
import { Table } from 'antd';

import EditableCell from './EditableCell';
import EditableFormRow from './EditableFormRow';

const EditableTable = ({ columns, handleSave, ...otherProps }) => {
  const components = {
    body: {
      row: EditableFormRow,
      cell: EditableCell,
    },
  };

  const mappedColumns = columns.map(col => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: record => ({
        record,
        editable: col.editable,
        isSelect: col.isSelect,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave: handleSave,
      }),
    };
  });

  return (
    <Table
      components={components}
      size="small"
      rowClassName={() => 'editable-row'}
      rowKey={record => record.id}
      bordered
      columns={mappedColumns}
      {...otherProps}
    />
  );
};

export default EditableTable;
