const router = require('express').Router();


router.get('/', (req, res) => {
    console.log('Try get!');
    res.end();
})

module.exports = router;