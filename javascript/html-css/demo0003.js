console.log('进入demo0003.js');
var desktop = document.getElementById('desktop');
var phone = document.getElementById('phone');
var loadpage = document.getElementById('loadpage');
console.log(desktop, phone, loadpage);
// 需要导入huhuiyu.utils.js才可以使用下面的功能
console.log(huhuiyu.getBrowserInfo()); //获取浏览器的相关信息
console.log(huhuiyu.isMobile()); //是否手机模式
// 虚拟加载速度慢的效果
setTimeout(function () {
  loadpage.style.display = 'none';
  if (huhuiyu.isMobile()) {
    phone.style = 'block';
    // alert('手机模式');
  } else {
    desktop.style = 'block';
    // alert('电脑模式');
  }
}, 5000);

// 监听页面滚动
window.addEventListener('scroll', function () {
  var stop = this.document.documentElement.scrollTop; //上下滚动的值
  var aleft = this.document.documentElement.scrollLeft;//左右滚动
  this.console.log('页面滚动',stop,sleft);
});

//作业：将上周周作业的改造成手机电脑自适应，或者两不同的版本
