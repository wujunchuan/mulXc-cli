import 'common/style/index.less';
import './style/index.less';
import Role from './img/role.png';
document.getElementById('home').innerHTML = 'this is home page!';
console.log('home');

((name) => {
  console.log(`hello world by ${name}`);
  console.log(Role);
})('wujunchuan')