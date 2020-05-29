/*
    从服务器主动发送请求调用接口-查询数据
*/

const http = require('http');

let options = {
    protocol : 'http:',
    hostname : 'localhost',
    port : 3000,
    path : '/books'
}

let req = http.request(options,(res)=>{
    let info = '';

    res.on('data',(chunk)=>{
        info += chunk;
    });
    res.on('end',()=>{
        console.log(info);
    });
});

req.end();
