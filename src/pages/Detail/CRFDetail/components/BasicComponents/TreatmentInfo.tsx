import React from 'react';
import {
  Tabs,
  Form,
  Divider,
  Radio,
  Rate,
  Input,
  Button,
  Select,
  TimePicker,
  DatePicker,
  Checkbox,
  InputNumber,
  Switch,
  Popconfirm,
} from 'antd';
import styles from './index.less';

import LaborInspect from './LaborInspect';
import Immunohistochemical from './Immunohistochemical';
import MolecularDetection from './MolecularDetection';
import SideReaction from './SideReaction';
import SystemSign from './SystemSign';
import TreatmentRecord from './TreatmentRecord';
import EffectEvalution from './EffectEvalution';
const { TabPane } = Tabs;
const { Option } = Select;

const layout = {
  labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 8,
  },
};

class TreatmentInfo extends React.Component {
  render() {
    return (
      <div>
        <Tabs tabPosition="top">
          <TabPane tab="治疗记录" key="treatment_record">
            <TreatmentRecord
              treNum={this.props.treNum}
              pid={this.props.pid}
              initialValues={this.props.initialValues}
            />
          </TabPane>

          <TabPane tab="实验室检查" key="labor_inspect">
            <LaborInspect
              pid={this.props.pid}
              initialValues={this.props.initialValues}
            />
          </TabPane>
          <TabPane tab="免疫组化" key="immunohistochemical">
            <Immunohistochemical
              pid={this.props.pid}
              initialValues={this.props.initialValues}
            />
          </TabPane>
          <TabPane tab="分子检测" key="molecular_detection">
            <MolecularDetection
              pid={this.props.pid}
              initialValues={this.props.initialValues}
            />
          </TabPane>

          {/* <TabPane tab="疗效评估" key="effect_evalution">
            <EffectEvalution
              pid={this.props.pid}
              initialValues={this.props.initialValues}
            />
          </TabPane> */}
          <TabPane tab="症状体征" key="system_sign">
            <SystemSign
              pid={this.props.pid}
              initialValues={this.props.initialValues}
            />
          </TabPane>
          <TabPane tab="副反应" key="side_reaction">
            <SideReaction
              pid={this.props.pid}
              initialValues={this.props.initialValues}
            />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
export default TreatmentInfo;
