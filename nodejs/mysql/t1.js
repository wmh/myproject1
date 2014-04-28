var tableName = "medoo_test_" + randomInt(1000, 9999);
console.log(tableName);

function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'zxcv',
    database: 'test'
});

connection.connect();
query = connection.query('CREATE TABLE IF NOT EXISTS ' + tableName + ' (  id int(11) NOT NULL auto_increment,  data varchar(10) NOT NULL,  ctime int(11) NOT NULL,  PRIMARY KEY  (id)) ENGINE=MEMORY DEFAULT CHARSET=utf8', function(error) {
    if(error) {
        throw error;
    }
});
console.log(query.sql);

var startTime = new Date().getTime();

for (var i = 0; i < 10000; ++i) {
	query = connection.query('INSERT INTO ?? SET ?', [tableName, {data: i, ctime: Math.floor(new Date().getTime()/1000)}], function(err, result) {
		if (err) throw err;
		
		//console.log(result.insertId);
		if (result.insertId == 10000) {
			console.log("Spend time: " + ((new Date().getTime()) - startTime));
		}
	});
}
query = connection.query('DROP TABLE ' + tableName, function(error) {
    if(error) {
        throw error;
    }
});
console.log(query.sql);

connection.end();
