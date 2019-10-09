import { createHintOne, createHintTwo, createHintThree } from "./d3Manipulations";

const manageHints = mode => {
  switch (mode) {
    case 0:
      createHintOne();
      break;
    case 1:
      createHintTwo();
      break;
    case 2:
      createHintThree();
      break;
    default:
      console.log("Nothing happens");
  }
};

export default manageHints;
