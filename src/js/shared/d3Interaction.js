import {
  createHintOne,
  createHintTwo,
  createHintThree,
  createHintFour
} from "./d3Manipulations";

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
    case 3:
      createHintFour();
      break;
    default:
      console.log("Nothing happens");
  }
};

export default manageHints;
