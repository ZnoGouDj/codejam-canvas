import Canvas from "../canvas/Canvas";
import Sizes from "../sizes/Sizes";

const sizes = new Sizes(document.querySelector(".sizes"));
const canvas = new Canvas(document.querySelector(".canvas"), sizes.getCurrentSize());
sizes.onSizeChange(size => canvas.setSize(size));