console.log('ajax-demo.js');
// 部门元素部分
// 部门编号表单元素
var deptId = document.getElementById('tbEmployee.deptId');
// 查询按钮
var btnQuery = document.getElementById('btnQuery');
// 显示结果用的div
var divResult = document.getElementById('divResult');
console.log(deptId, btnQuery, divResult);
// 查询点击事件
btnQuery.addEventListener('click', function () {
  ljt.ajax(
    '/link/queryAllEmployeeByDept',
    {
      // 'tbEmployee.deptId': deptId.value,
      tbEmployee: { deptId: deptId.value },
    },
    function (data) {
      console.log(data);
      // success是应答是否成功的表示，如果是false就表示失败，不需要继续流程
      if (!data.success) {
        alert(data.message); //不成功就显示消息
        return;
      }
      // JSON.stringify,第二个参数就是要显示字段列表数组
      // 第三个参数是美化显示json,数值就是要缩进的空格数
      divResult.innerHTML = JSON.stringify(data, null, 2);
      // 字段的细节
      divResult.innerHTML +=
        '<br>分页信息' + JSON.stringify(data.resultData.page);
      divResult.innerHTML +=
        '<br>list(数组)中的值' + JSON.stringify(data.resultData.list[0]);
    }
  );
});
