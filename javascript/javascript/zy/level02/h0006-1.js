console.log('进入h0006-1.js');
var divInfo = document.getElementById('divInfo');
//本地储存和哪个页面保存无关，是以网络为单位
divInfo.innerHTML =
  localStorage.getItem('info') + '<br>' + sessionStorage.getItem('sinfo');
