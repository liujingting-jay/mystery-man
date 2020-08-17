console.log('进入reply.js');
var page = { pageNumber: 1, pageSize: 5 };
function query() {
  ljt.ajax('post', '/reply/queryByUser', { page: page }, function (data) {
    console.log(data);
    if (data.code == 1000) {
      alert(data.message);
      return;
    }
    page = data.resultData.page;
    var list = data.resultData.list;
    var tbData = document.getElementById('tbData');
    tbData.innerHTML = '';
    // 循环表格
    for (var i = 0; i < list.length; i++) {
      var d = list[i];
      console.log(d);
      var tr = document.createElement('tr');
      // 帖子标题
      var td = document.createElement('td');
      td.append(d.post.title);
      tr.append(td);
      tbData.append(tr);
      // 回帖内容
      td = document.createElement('td');
      td.append(d.content);
      tr.append(td);
      // 删除按钮
      var td = document.createElement('td');
      var spanDelete = document.createElement('span');
      spanDelete.classList.add('btn', 'btn-danger');
      spanDelete.append('删除');
      // 删除的事件需要弹出对话框确认
      spanDelete.addEventListener('click', function () {
        delReply = this.deleteInfo;
        console.log('要删除的是', delReply);
        $('#delete-dialog').modal('show');
      });
      //同虚拟属性记住要删除的值
      spanDelete.deleteInfo = d;
      td.append(spanDelete);
      tr.append(td);
      tbData.append(tr);
    }
  });
}

// 删除事件
var delReply;
document.getElementById('btnDel').addEventListener('click', function () {
  ljt.ajax(
    'post',
    '/reply/delete',
    {
      'tbReply.replyId': delReply.replyId,
    },
    function (data) {
      alert(data.message);
      $('#delete-dialog').modal('hide');
      query();
    }
  );
});
query();

// 作业：添加分页，弹出式对话框显示服务器消息
