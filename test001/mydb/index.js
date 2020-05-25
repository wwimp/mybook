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

// 操作数据库
connection.query('select count(*) as total from book', function(error, results, fields) {
	if (error) throw error;
	console.log('表book中共有', results[0].total + '条数据');
});
// 关闭数据库
connection.end();
