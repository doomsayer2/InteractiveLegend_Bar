import React, { Fragment } from 'react';
import { Switch } from 'antd';
import manageHints, { enableAllHints } from '../shared/d3Interaction';
import { removeAllHints } from '../shared/d3Manipulations';
import * as d3 from 'd3';

const ModeSwitcher = ({ mode }) => {
  const toggle = (checked, event, mode) => {
    if (checked) {
      // TODO OTHER IDEA NOW:
      // Render just all steps if this is checked with different classes otherwise render them normally
      d3.selectAll('.ant-steps-item-wait').classed('makeVisible', true);
      removeAllHints();
      enableAllHints();
    } else {
      removeAllHints();
      d3.selectAll('.ant-steps-item-wait').classed('makeVisible', false);
      manageHints(mode);
    }
  };

  return (
    <Fragment>
        <small style={{ marginRight: 10 + 'px' }}>Show/Hide All Hints</small>
        <Switch
          checkedChildren={'On'}
          unCheckedChildren={'Off'}
          defaultChecked={false}
          onClick={(checked, e) => {
            toggle(checked, e, mode);
          }}
        ></Switch>
    </Fragment>
  );
};

export default ModeSwitcher;
