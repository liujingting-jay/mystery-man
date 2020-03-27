console.log('执行zy14.js');
var d1 = document.getElementById('d1');
var d2 = document.getElementById('d2');
var d3 = document.getElementById('d3');
var d4 = document.getElementById('d4');
var d5 = document.getElementById('d5');
var xhx01 = document.getElementById('xhx01');
var xhx02 = document.getElementById('xhx02');
var xhx03 = document.getElementById('xhx03');
var xhx04 = document.getElementById('xhx04');
var xhx05 = document.getElementById('xhx05');
document.getElementById('d1').addEventListener('click', function() {
  beijing.setAttribute('class', 'bac01');
  if (d1 == d1) {
    xhx01.setAttribute('class', 'bar1');
    xhx02.setAttribute('class', '');
    xhx03.setAttribute('class', '');
    xhx04.setAttribute('class', '');
    xhx05.setAttribute('class', '');
    return;
  }
});

document.getElementById('d2').addEventListener('click', function() {
  beijing.setAttribute('class', 'bac02');
  if (d2 == d2) {
    xhx02.setAttribute('class', 'bar2');
    xhx01.setAttribute('class', '');
    xhx03.setAttribute('class', '');
    xhx04.setAttribute('class', '');
    xhx05.setAttribute('class', '');
    return;
  }
});

document.getElementById('d3').addEventListener('click', function() {
  beijing.setAttribute('class', 'bac03');
  if (d3 == d3) {
    xhx03.setAttribute('class', 'bar3');
    xhx01.setAttribute('class', '');
    xhx02.setAttribute('class', '');
    xhx04.setAttribute('class', '');
    xhx05.setAttribute('class', '');
    return;
  }
});

document.getElementById('d4').addEventListener('click', function() {
  beijing.setAttribute('class', 'bac04');
  if (d4 == d4) {
    xhx04.setAttribute('class', 'bar4');
    xhx01.setAttribute('class', '');
    xhx02.setAttribute('class', '');
    xhx03.setAttribute('class', '');
    xhx05.setAttribute('class', '');
    return;
  }
});

document.getElementById('d5').addEventListener('click', function() {
  beijing.setAttribute('class', 'bac05');
  if (d5 == d5) {
    xhx05.setAttribute('class', 'bar5');
    xhx01.setAttribute('class', '');
    xhx02.setAttribute('class', '');
    xhx03.setAttribute('class', '');
    xhx04.setAttribute('class', '');
    return;
  }
});
