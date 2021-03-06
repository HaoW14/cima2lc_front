import React from 'react';
import EditableTable from '@/pages/BasicComponents/EditableTable';
import { Radio, DatePicker, Cascader, Rate, Input } from 'antd';
import { sideEffectsave, signssave } from '../../service';

const SystemSign = props => {
  const passData = data => {
    props.passData(data);
  };
  const onChange = (text, record, index) => {
    record[index] = text;
  };
  return (
    <EditableTable
      dataColumns={[
        {
          title: '序号',
          dataIndex: 'key',
          key: 'key',
          width: '5%',
          render: (text, record, index) => {
            return <span>{index + 1}</span>;
          },
        },
        {
          title: '症状名称',
          dataIndex: 'symName',
          key: 'symName',
          width: '10%',
          render: (text, record, index) => (
            <Input
              onChange={e => {
                onChange(e.target.value, record, 'symName');
              }}
            />
          ),
        },
        {
          title: '开始日期',
          dataIndex: 'begDate',
          key: 'begDate',
          width: '10%',
          render: (text, record, index) => (
            <DatePicker
              onChange={(e, eString) => {
                onChange(eString, record, 'begDate');
              }}
            />
          ),
        },
        {
          title: '目前是否存在',
          dataIndex: 'isExe',
          key: 'isExe',
          width: '10%',
          render: (text, record, index) => (
            <Radio.Group
              onChange={e => {
                onChange(e.target.value, record, 'isExe');
              }}
            >
              <Radio value={0}>否</Radio>
              <Radio value={1}>是</Radio>
            </Radio.Group>
          ),
        },
        {
          title: '结束日期',
          dataIndex: 'endDate',
          key: 'endDate',
          width: '10%',
          render: (text, record, index) => (
            <DatePicker
              onChange={(e, eString) => {
                onChange(eString, record, 'endDate');
              }}
            />
          ),
        },
      ]}
      hassave={true}
      save={signssave}
      dataSource={props.dataSource}
      operColumns={[]}
      passData={passData}
    />
  );
};

export default SystemSign;
