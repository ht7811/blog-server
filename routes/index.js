var express = require('express');
var router = express.Router();
var request = require('request');
var iconv = require('iconv-lite'); //引入模块
var http = require('http');
var bodyPaeser =require('body-parser')
var encoding = require('encoding');
var mysql = require('mysql');

var mysql = require('mysql');

var server_url = 'http://119.23.244.145:10071';
var error_info =  {"result":"true","code":"400","message":"请求数据失败，请稍后再试"};

// 数据库配置
var connection = mysql.createConnection({
    host: '118.126.112.54',
    user: 'root',
    password: 'chen@7811',
    port: '3306',
    database: 'blog'
});
connection.connect();


/* GET users listing. */
router.get('/', function(req, res, next) {
    //var sql = 'select * from t_user where username = ?';
    //var sql = "select * from t_article order by update_time desc limit 0,?";
    var sql = "select * from t_article";
    //var sql = 'select * from t_user';
    connection.query(sql, function(error, result){
        if(error){
            return res.end('[SELECT ERROR] - ' + err.message);
        }
        res.send(result);
    });
    //res.send('respond with a resource');
});






module.exports = router;