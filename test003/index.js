/*
    从服务器主动发送请求
    http.request(options[, callback])
*/

const http = require('http');
const path = require('path');
const fs = require('fs');

let options = {
    hostname : 'www.baidu.com',
    port : 80
}

let req = http.request(options,(res)=>{
    let info = '';

    res.on('data',(chunk)=>{
        info += chunk;
    });
    res.on('end',()=>{
        fs.writeFile(path.join(__dirname,'baidu.html'),info,(err)=>{
            console.log('已经获取到百度主页的内容');
        });
    });
});

req.end();

