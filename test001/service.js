const data = require('./data.json');
const path = require('path');
const fs = require('fs');
// 自动生成图书编号
let maxBookCode = () => {
	let arr = [];
	data.forEach((item) => {
		arr.push(item.id);
	});
	return Math.max.apply(null, arr);
}

// 渲染主页面
exports.showIndex = (req, res) => {
	res.render('index', {
		list: data
	});
}
// 跳转到添加图书的页面
exports.toAddBook = (req, res) => {
	res.render('addBook', {});
}
// 添加图书保存数据
exports.addBook = (req, res) => {
	// 获取表单数据
	let info = req.body;
	let book = {};
	for (let key in info) {
		book[key] = info[key];
	}
	book.id = maxBookCode() + 1;
	data.push(book);
	// 把内存中的数据存入文件
	fs.writeFile(path.join(__dirname, 'data.json'), JSON.stringify(data, null, 4), (err) => {
		if (err) {
			res.send('服务器错误，请与管理员联系！');
		}
		// 文件写入成功之后重新跳转到主页面
		res.redirect('/');
	});
}
// 跳转编辑图书页面
exports.toEditBook = (req, res) => {
	let id = req.query.id;
	let book = {};
	data.forEach((item) => {
		if (id == item.id) {
			book = item;
			return;
		}
	});
	res.render('editBook', book)
}
// 编辑图书更新数据
exports.editBook = (req, res) => {
	let info = req.body;
	data.forEach((item) => {
		if (info.id == item.id) {
			for (let key in info) {
				item[key] = info[key];
			}
			return;
		}
	});
	// 把内存中的数据存入文件
	fs.writeFile(path.join(__dirname, 'data.json'), JSON.stringify(data, null, 4), (err) => {
		if (err) {
			res.send('服务器错误，请与管理员联系！');
		}
		// 文件写入成功之后重新跳转到主页面
		res.redirect('/');
	});
}
