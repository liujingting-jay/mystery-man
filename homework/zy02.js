// 变量 数字变化
var count = 0;
document.getElementById('1').innerHTML = count;
document.getElementById('spCount').addEventListener('click', function() {
  count = count + 1;
  document.getElementById('1').innerHTML = count;
});
