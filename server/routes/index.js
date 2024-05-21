var express = require('express');
var router = express.Router();

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

});

/* GET home page. */
router.get('/', function(req, res, next) {

    pool.query('SELECT * FROM mderndemotable;', function (error, results, fields) {
        if (error) { 
            res.status(err.status || 500)
            res.json({
                message:err.message,
                error: err
            })
        };
        res.json(results)
        console.log(results);
    })

    
});



/* POST home page. */
router.post('/', (req, res) => {
    // Respond to POST request

    pool.query('INSERT INTO mderndemotable VALUES(NULL, "frankie");', function (error, results, fields) {
        if (error) throw error;

        // a way to see if insertion was successful:
        if (results.affectedRows = 1 & results.changedRows == 0){
            res.status(200).send()
        }
        
    });

});


module.exports = router;
