console.log('考试复习');

// 信息对话框
var info_body = document.querySelector('#info-dialog .modal-body');
console.log(info_body);

function showInfo(info) {
  info_body.innerHTML = info;
  $('#info-dialog').modal('show');
}

// showInfo('测试对话框');
// 添加相关
var btnShowAdd = document.getElementById('btnShowAdd');
var txt_info = document.getElementById('txt_info');
var txt_name = document.getElementById('txt_name');
var txt_url = document.getElementById('txt_url');
var btnAdd = document.getElementById('btnAdd');
console.log(btnShowAdd, txt_info, txt_name, txt_url, btnAdd);

function showAdd() {
  $('#add-dialog').modal('show');
}

btnShowAdd.addEventListener('click', showAdd);

btnAdd.addEventListener('click', function () {
  var tbMedia = {
    info: txt_info.value,
    name: txt_name.value,
    url: txt_url.value
  };

  ljt.ajax('/media/addImage', { tbMedia: tbMedia }, function (data) {
    showInfo(data.message);
    if (data.success) {
      txt_info.value = '';
      txt_name.value = '';
      txt_url.value = '';
    }
  });
});

// showAdd();
// 查询的部分
var page = { pageSize: 5, pageNumber: 1 };
var tbData = document.getElementById('tbData');

function query() {
  ljt.ajax('/media/queryImage', { page: page }, function (data) {
    console.log(data);
    if (!data.success) {
      showInfo(data.message);
      return;
    }
    page = data.resultData.page;
    var list = data.resultData.list;
    tbData.innerHTML = '';
    for (var i = 0; i < list.length; i++) {
      var info = list[i];
      console.log('后端数据:', info);
      // 数据行
      var tr = document.createElement('tr');
      // 名称
      var td = document.createElement('td');
      td.append(info.name);
      tr.append(td);
      // url地址
      td = document.createElement('td');
      td.append(info.url);
      tr.append(td);
      // 描述
      td = document.createElement('td');
      td.append(info.info);
      tr.append(td);
      // 是否置顶
      td = document.createElement('td');
      td.append(info.sticky == 'y' ? '已置顶' : '未置顶');
      tr.append(td);

      // 操作
      td = document.createElement('td');
      var btnShowDel = document.createElement('span');
      btnShowDel.classList.add('btn', 'btn-danger');
      btnShowDel.append('删除');
      btnShowDel.addEventListener('click', showDel);
      td.append(btnShowDel);
      tr.append(td);

      // 数据绑定在tr上面
      tr.info = info;
      tbData.append(tr);
    }
  });
}
// 记录当前要操作的信息
var dataInfo = {};
var delBody = document.querySelector('#del-dialog .modal-body');
var btnDel = document.getElementById('btnDel');
console.log(delBody, btnDel);
// 删除操作
function showDel() {
  // 删除的数据是在tr上，按钮的上二级元素就是tr
  dataInfo = this.parentElement.parentElement.info;
  console.log('要删除信息:', dataInfo);
  delBody.innerHTML = '是否删除：' + dataInfo.name;
  $('#del-dialog').modal('show');
}

btnDel.addEventListener('click', function () {
  ljt.ajax(
    '/media/deleteImage',
    {
      'tbMedia.mid': dataInfo.mid
    },
    function (data) {
      showInfo(data.message);
      $('#del-dialog').modal('hide');
    }
  );
});

ljt.autoLogin(query);

// javascript
// 获取，修改，删除，创建html的内容 dom 文档对象模型
// 事件处理 响应动作
// 内置函数 延时处理,随机数,类型转换
// 变量，数据类型 数字，字符串，数组，json。。。
// 流程控制 if判断 for循环
// function
// bootstrap