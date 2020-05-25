/* 
插入数据 
 */

// 加载数据库驱动
const mysql = require('mysql');
// 创建数据库连接
const connection = mysql.createConnection({
	host: 'localhost', // 数据库所在服务器的域名或者IP地址
	user: 'root',
	password: '',
	database: 'book'
});
// 执行连接操作
connection.connect();

let sql = 'insert into book set ?';
let data = {
	name: '123',
	author: '456',
	category: '789',
	description: '000'
}

// 操作数据库
connection.query(sql, data, function(error, results, fields) {
	if (error) throw error;
	// console.log(results);
	if (results.affectedRows == 1) {
		console.log('插入成功');
	}
});
// 关闭数据库
connection.end();
