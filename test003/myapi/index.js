/*
    通过第三方包superagent发送服务器请求
*/

const request = require('superagent');

// request.get('http://localhost:3000/books')
//        .end((err,res) => {
//            // console.log(res.body);//有数据格式
//            console.log(res.text);//字符串
//        });

// request.post('http://localhost:3000/books/book')
//        .set('Content-Type', 'application/x-www-form-urlencoded')
//        .send({name:'abadf',author:'adfads',category:'adsfads',description:'asdfads'})
//        .end((err,res) => {
//            console.log(res.body);//有数据格式
//        });

// request.get('http://localhost:3000/books/book/2')
//        .end((err,res) => {
//            console.log(res.body);//有数据格式
//        });

// request.put('http://localhost:3000/books/book')
//        .set('Content-Type', 'application/x-www-form-urlencoded')
//        .send({id:'39',name:'dddd',author:'fff',category:'ccc',description:'ggg'})
//        .end((err,res) => {
//            console.log(res.body);//有数据格式
//        });

// request.delete('http://localhost:3000/books/book/39')
//        .end((err,res) => {
//            console.log(res.body);//有数据格式
//        });

request.get('http://www.weather.com.cn/data/sk/101010100.html')
       .end((err,res) => {
           // console.log(res.body);//有数据格式
           console.log(res.text);
       });
