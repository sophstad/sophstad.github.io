var pi = Math.PI;
var sin = Math.sin;
var floor = Math.floor;
var abs = Math.abs;
var pow = Math.pow;

var epoch = function () {
  return Date.now() / 2000;
};
// The last number in that line controls color cycle speed.

function K(h) {
  h *= -1;
  var r = sin(pi * h);
  var g = sin(pi * (h + 1 / 3));
  var b = sin(pi * (h + 2 / 3));
  return [r, g, b].map(function (c) {
    c = c * c;
    c = 0.85 + (c * 0.1);
    return floor(c * 255);
  });
}

function recolor(plus) {
  var cycle = ((epoch() / 50) + plus) % 1;
  var color = K(cycle);
  color = 'rgb(' + color.join(',') + ')';
  document.getElementsByTagName('body')[0].style.backgroundColor = color;
}