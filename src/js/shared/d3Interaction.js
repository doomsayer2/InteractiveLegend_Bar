import { createHintOne } from './d3Manipulations';

const manageHints = mode => {
  switch(mode) {
      case 0:
          createHintOne();
          break;
      default:
          console.log('Nothing happens');
  }
};

export default manageHints;