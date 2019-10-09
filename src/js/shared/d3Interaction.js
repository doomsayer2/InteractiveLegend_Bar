import { createHintOne, createHintTwo } from "./d3Manipulations";

const manageHints = mode => {
  switch (mode) {
    case 0:
      createHintOne();
      break;
    case 1:
      createHintTwo();
      break;
    default:
      console.log("Nothing happens");
  }
};

export default manageHints;
