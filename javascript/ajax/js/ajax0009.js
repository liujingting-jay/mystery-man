console.log('执行ajax0009.js');

var page = { pageNumber: 1, pageSize: 5 };
var divResult = document.getElementById('divResult');
var divImages = document.getElementById('divImages');
// query 查服务器端，把图片加载出来
function query() {
  ljt.ajax('post', '/util/queryAllImage', { page: page }, function (data) {
    console.log(data);
    // 后端数据转json
    divResult.innerHTML = JSON.stringify(data);
    //  console.log(data.code, data.success);
    // console.log(data.resultData.page);
    // console.log(data.resultData.list);
    // 服务器返回的图片地址信息的数组
    var list = data.resultData.list;
    divImages.innerHTML = ''; //清理掉原有的内容
    for (var i = 0; i < list.length; i++) {
      // 每一个数据都是一个页面的图片元素
      var imginfo = list[i];
      console.log(imginfo);
      var div = document.createElement('div'); //外层一个div
      var img = document.createElement('img');
      img.setAttribute('src', imginfo.content);
      div.append(img); //把图片放进div里
      divImages.append(div); //把div追加到容器中
    }
    // 分页信息
    page = data.resultData.page; //更新为服务器端的分页信息
    spPage.innerHTML =
      '当前页/总页数/记录数' +
      page.pageNumber +
      '/' +
      page.pageCount +
      '/' +
      page.total;
  });
}

// 分页相关=====================================
var btnpre = document.getElementById('btnpre');
var spPage = document.getElementById('spPage');
var btnNext = document.getElementById('btnNext');
var btnGo = document.getElementById('btnGo');
var ps = document.getElementById('ps');
var txtPageNumber = document.getElementById('txtPageNumber');
//
ps.addEventListener('change', function () {
  page.pageSize = ps.vlue;
  query();
});
// 按回车跳到第几页
txtPageNumber.addEventListener('keyup', function (event) {
  if (event.keyCode == 13) {
    toPage();
  }
});
// 点击go
btnGo.addEventListener('click', function () {
  toPage();
});
function toPage() {
  // 将页码设置成txtPageNumber的值
  page.pageNumber = txtPageNumber.value;
  query();
}

btnNext.addEventListener('click', function () {
  // 页码加一再调用查询
  page.pageNumber++;
  query();
  console.log(page);
});

btnpre.addEventListener('click', function () {
  // 页码减一在调用
  page.pageNumber--;
  query();
});

query();

// 服务器端应答json样本
var responseData = {
  code: 200,
  message: '',
  success: true,
  token: 'd1deeb4f-6779-43f4-b849-3803bda9fbac',
  resultData: {
    page: { pageSize: 5, pageNumber: 1, pageCount: 26, total: 127 },
    list: [
      {
        iid: 824,
        content:
          'https://m.qpic.cn/psc?/V13RxqEM4e0Kc0/MoK.EY8GiNN2Kt4U8x1aWADwqN*1O8ZYDI0HtN*W0naIP4erl32*I*IlfwCqHkiEuR90.W3nYS6pp4SvobuWvw!!/b&bo=sgKyAgAAAAARBzA!&rf=viewer_4',
      },
      {
        iid: 820,
        content:
          'https://klcxy.top/myoss/common/queryOssUrl?tbOssInfo.oiid=516&tbOssInfo.obid=9',
      },
      { iid: 660, content: 'https://www.woyaogexing.com/tupian/weimei/l' },
      {
        iid: 659,
        content: 'https://www.woyaogexing.com/tupian/weimei/2020/154768.html',
      },
      {
        iid: 654,
        content: 'https://www.woyaogexing.com/tupian/weimei/2020/154654.html',
      },
    ],
  },
};
