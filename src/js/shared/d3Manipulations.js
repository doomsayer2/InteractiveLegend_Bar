import * as d3 from "d3";
import { moveElementsToNewParent } from "./util";

const createHintOne = () => {
  const paths = d3.select(".vegaViz1 > svg").selectAll("path");
  const oneBar = d3.select(paths.nodes()[5]);
  const oneBarBox = oneBar.node().getBBox();

  console.log("Bar properties: ", oneBar.node().getBoundingClientRect());
  console.log(oneBar.node().getBBox());

  const hint1Group = d3
    .select(".vegaViz1 > svg")
    .select(".mark-rect")
    .append("g")
    .on("click", function(d) {
      d3.select(this).attr("visibility", "hidden");
    });

  hint1Group
    .append("circle")
    .attr("r", 10)
    .attr("cx", oneBarBox.x + 15)
    .attr("cy", oneBarBox.y - 12)
    .style("stroke", "#C51B7D")
    .style("fill", "#C51B7D");
  hint1Group
    .append("text")
    .attr("x", oneBarBox.x + 15)
    .attr("y", oneBarBox.y - 6)
    .attr("text-anchor", "middle")
    .attr("fill", "white")
    .text("1");
  hint1Group
    .append("rect")
    .attr("width", oneBarBox.width)
    .attr("height", oneBarBox.height)
    .attr("x", oneBarBox.x)
    .attr("y", oneBarBox.y)
    .attr("fill", "none")
    .attr("stroke", "#C51B7D")
    .attr("stroke-width", 2);

  return 1;
};

const createHintTwo = () => {
  const paths = d3.select(".vegaViz1 > svg").selectAll("path");
  const oneBar = d3.select(paths.nodes()[9]);
  const oneBarBox = oneBar.node().getBBox();

  console.log("Bar properties: ", oneBar.node().getBoundingClientRect());
  console.log(oneBar.node().getBBox());

  const hint2Group = d3
    .select(".vegaViz1 > svg")
    .select(".mark-rect")
    .append("g")
    .on("click", function(d) {
      d3.select(this).attr("visibility", "hidden");
    });

  hint2Group
    .append("circle")
    .attr("r", 10)
    .attr("cx", oneBarBox.x + 15)
    .attr("cy", oneBarBox.y - 12)
    .style("stroke", "#C51B7D")
    .style("fill", "#C51B7D");
  hint2Group
    .append("text")
    .attr("x", oneBarBox.x + 15)
    .attr("y", oneBarBox.y - 6)
    .attr("text-anchor", "middle")
    .attr("fill", "white")
    .text("2");

  hint2Group
    .append("line")
    .attr("x1", oneBarBox.x + oneBarBox.width / 2)
    .attr("y1", oneBarBox.y)
    .attr("x2", oneBarBox.x + oneBarBox.width / 2)
    .attr("y2", oneBarBox.y + oneBarBox.height)
    .attr("stroke", "#C51B7D")
    .attr("stroke-width", 2);

  hint2Group
    .append("line")
    .attr("x1", oneBarBox.x)
    .attr("y1", oneBarBox.y)
    .attr("x2", oneBarBox.x + oneBarBox.width)
    .attr("y2", oneBarBox.y)
    .attr("stroke", "#C51B7D")
    .attr("stroke-width", 2);

  hint2Group
    .append("line")
    .attr("x1", oneBarBox.x)
    .attr("y1", oneBarBox.y + oneBarBox.height)
    .attr("x2", oneBarBox.x + oneBarBox.width)
    .attr("y2", oneBarBox.y + oneBarBox.height)
    .attr("stroke", "#C51B7D")
    .attr("stroke-width", 2);

  return 2;
};

/** FOR LEGEND BOXES NECESSARY */
const makeLegendBoxes = () => {
  d3.select(".stepsContainer")
    .append("fieldset")
    .attr("id", "reading")
    .append("legend")
    .text("Reading");
  d3.select(".stepsContainer")
    .append("fieldset")
    .attr("id", "using")
    .append("legend")
    .text("Using");

  moveElementsToNewParent(["step-0", "step-1", "step-2"], "reading");
  moveElementsToNewParent(["step-3", "step-4", "step-5"], "using");
};

export { createHintOne, makeLegendBoxes, createHintTwo };
