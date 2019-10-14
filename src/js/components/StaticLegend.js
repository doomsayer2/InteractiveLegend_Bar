import React, { useEffect } from 'react';
import StepContent from './StepContent';
import { makeLegendBoxes } from '../shared/d3Manipulations';
import { getAllHints } from '../shared/DataProvider';
import '../../css/legend.css';

import { Steps, Row } from 'antd';
const { Step } = Steps;

// Do this before in order to make sure we have it
const hintsText = getAllHints().text;

const StaticLegend = () => {
  useEffect(() => {
    makeLegendBoxes();
  });

  return (
    <div>
      <Row type="flex" justify="start" style={{ marginTop: 20 + 'px' }}>
        <Steps
          direction="vertical"
          className={'stepsContainer'}
        >
          {hintsText.map((item, idx) => (
            <Step
              id={`step-${idx}`}
              key={idx}
              title={<StepContent content={item[`h${idx + 1}`]} />}
              status={'process'}
            />
          ))}
        </Steps>
      </Row>
    </div>
  );
};

export default StaticLegend;
