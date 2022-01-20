const canvas = document.getElementsByTagName('canvas')[0];
const brushTool = canvas.getContext('2d');
const c = console.log;

function getLimits() {
  c('H', canvas.height);
  c('W', canvas.width);
}

const yLimit = canvas.height;
const xLimit = canvas.width;
const diamondSpacing = 0.08;

function drawRectangle() {
  brushTool.fillStyle = '#009c3b';
  brushTool.fillRect(0, 0, xLimit, yLimit);
}

function drawDiamond() {
  brushTool.fillStyle = '#ffdf00';

  brushTool.beginPath();
  brushTool.moveTo(xLimit * diamondSpacing, yLimit / 2);
  brushTool.lineTo(xLimit / 2, yLimit * diamondSpacing);
  brushTool.lineTo(xLimit - xLimit * diamondSpacing, yLimit / 2);
  brushTool.lineTo(yLimit, xLimit / 2 - yLimit * diamondSpacing);
  brushTool.fill();
}

function drawCircle() {
  brushTool.fillStyle = '#002776';
  brushTool.beginPath();
  brushTool.arc(xLimit / 2, yLimit / 2, 43, 0, Math.PI * 2, true);
  brushTool.fill();
}

function drawWhiteBelt() {
  c('Submit your solution: https://github.com/taveirasrc/brazils-flag-canvas-html');
}

drawRectangle();
drawDiamond();
drawCircle();
drawWhiteBelt();