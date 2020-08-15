
console.log('进入ajax0007.js');
var txtContent = document.getElementById('txtContent');
var btnAdd = document.getElementById('btnAdd');
var divResult = document.getElementById('divResult');
// =============添加图片
btnAdd.addEventListener('click', function () {
  // 收集后端需要的信息
  var param = { tbImages: { content: txtContent.value } }; //照片的完整链接地址
  // 调用ajax 添加照片墙

  ljt.ajax('post', '/util/addImage', param, function (data) {
    // divResult.innerHTML = JSON.stringify(data);
    divResult.innerHTML = data.message;
  });
});

// 查询的部分 ==================================
var btnQuery = document.getElementById('btnQuery');
var divImages = document.getElementById('divImages');//图片显示
var btnMore = document.getElementById('btnMore'); //加载更多
var PAGE_STEP = 5; //每次加载更多数量
// 查询需要分页相关信息
// 一页显示10个  pageNumber: 1, pageSize: 10 
var page = { pageNumber: 1, pageSize: 10 };
// 查询点击动作
btnQuery.addEventListener('click', function () {
  console.log({ page: page });
  // 查询照片墙信息
  ljt.ajax('post', '/util/queryAllImage', { page: page }, function (data) {
    // data.resultData字段是服务器返回的数据
    // /util/queryAllImage返回的resultData中 list是图片数据的数组
    // page是完整的分页信息
    var list = data.resultData.list;
    page = data.resultData.page;
    divResult.innerHTML = JSON.stringify(list) + '<hr>';
    divResult.innerHTML += JSON.stringify(page);
    // 清除原有的内容
    divImages.innerHTML = '';
    // list是一组图片，需要循环添加页面
    // for(变量初始化;循环是否继续的逻辑判断表达式;每次循环后执行的代码)
    for (var i = 0; i < list.length; i++) {
      // 数组通过下标访问
      var imginfo = list[i];
      console.log(imginfo.content);
      // 创建img元素
      var img = document.createElement('img');
      img.setAttribute('src', imginfo.content);
      // 动态创建的元素也可以添加事件
      img.addEventListener('click', function () {
        // this表示当前对象，由于是img的事件，所有this就是动态创建的img对象
        window.open(this.getAttribute('src'));
      });
      // 追加到容器中
      divImages.append(img);
    }
  });
});

btnMore.addEventListener('click', function () {
  // 加载更多用了最没有性能的解决方案，就是每次都加大pageSize的值
  page.pageSize = page.pageSize + PAGE_STEP;
  // 触发查询按钮的点击事件
  btnQuery.click();
});
