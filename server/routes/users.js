var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/* PUT users listing. */
router.put('/user', (req, res) => {
    res.send('Got a PUT request at /user')
});


/* DELETE a user in users listing. */
router.delete('/user', (req, res) => {
res.send('Got a DELETE request at /user')
});

module.exports = router;
