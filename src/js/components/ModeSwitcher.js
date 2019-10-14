import React, { Fragment } from 'react';
import { Switch } from 'antd';
import * as d3 from 'd3';
import manageHints, { enableAllHints } from '../shared/d3Interaction';
import { removeAllHints } from '../shared/d3Manipulations';

const ModeSwitcher = ({ mode, changeShowAllHints }) => {
  const toggle = (checked, event, mode, changeShowAllHints) => {
    console.log('function: ', changeShowAllHints);
    if (checked) {
      // TODO OTHER IDEA NOW:
      // Render just all steps if this is checked with different classes otherwise render them normally
      removeAllHints();
      d3.select('#dynamicLegend').classed('hiddenClass', true);
      d3.select('#staticLegend').classed('hiddenClass', false);
        enableAllHints();
      
    } else {
      removeAllHints();
      d3.select('#dynamicLegend').classed('hiddenClass', false);
      d3.select('#staticLegend').classed('hiddenClass', true);
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
            toggle(checked, e, mode, changeShowAllHints);
          }}
        ></Switch>
    </Fragment>
  );
};

export default ModeSwitcher;
