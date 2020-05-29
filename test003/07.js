/*
    测试天气查询模块
*/
const weather = require('./weather.js');/**/

weather.queryWeather('101020100',(data)=>{
    console.log(data.weatherinfo.WD);
});