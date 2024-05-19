var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


/* POST home page. */
router.post('/', (req, res) => {
    // Respond to POST request

    var mysql = require('mysql');
    var pool  = mysql.createPool({
        connectionLimit : 10,
        host            : 'localhost',
        user            : 'legacy',
        password        : 'apassword',
        database        : 'mderndb'
    });

    pool.on('release', function (connection) {
        console.log('Connection %d released', connection.threadId);
        pool.end(function (error) {
            console.log('Pool connections terminated');
        });
    });

    pool.query('INSERT INTO mderndemotable VALUES(NULL, "frankie");', function (error, results, fields) {
        if (error) throw error;

        // a way to see if insertion was successful:
        if (results.affectedRows = 1 & results.changedRows == 0){
            res.status(200).send()
        }
        
    });

    // a SELECT to see if insertion was successful
    pool.query('SELECT * FROM mderndemotable;', function (error, results, fields) {
        if (error) throw error;
        console.log(results)
    });
    

    

});


module.exports = router;
