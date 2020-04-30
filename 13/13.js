// 13. 龜兔賽跑，兔子每秒可以跑20公尺，烏龜每秒跑0.28公尺，他們參加1000公尺競賽：
// 兔子故意用每跑5秒鐘後退1公尺的方式來挑釁烏龜，請問兔子在途中還可以偷懶休息幾秒鐘
// 再繼續跑並且贏得比賽?
const rl = require('../readline.module');
const getRestTime = require('./13.module')

console.log(`兔子還可休息 ${getRestTime(0.28,20 - 1 / 5,1000)} 秒`);
rl.close();