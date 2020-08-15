console.log('进入ajax0002.js');
console.log(ljt.serviceBaseUrl);
// Qs作用，js里面很容易得到json的对象，Qs可以将json对象转换成axios发送的请求参数(查询字符串)格式
var param = { echo: '刘婧婷' };
console.log(Qs.stringify(param));
param = { user: { username: '刘婧婷', password: 'abc123' } };
// {allowDots: true }表示支持多级json对象
console.log(Qs.stringify(param, { allowDots: true }));
// 简化版本的ajax的请求
ljt.ajax('post', '/', {echo:'刘婧婷'}, function (resp) {
  console.log(resp);
});
