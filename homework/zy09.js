var sz1 = 1314520;
var sz2 = 0;
document.getElementById('sz01').innerHTML = sz1;
document.getElementById('sz02').innerHTML = sz2;

document.getElementById('dj').addEventListener('click', function() {
  sz2 = sz2 + 1;
  sz1 = sz1 / 1.31119897168368;
  document.getElementById('sz01').innerHTML = sz1;
  document.getElementById('sz02').innerHTML = sz2;
  if (sz1 < 1) {
    document.getElementById('sz01').innerHTML =
      '恭喜刘婧婷like辽林顺屹，并成为林顺屹老婆';
    sz01.style.color = '#ff0000';
    document.getElementById('jieguo').innerHTML =
      '林顺屹是个小菜鸡！林顺屹是个臭弟弟！真的超级超级喜欢林顺屹！';
    jieguo.style.color = '#ff0000';
  }
});
