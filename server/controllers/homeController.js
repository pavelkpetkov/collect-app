const router = require('express').Router();


router.get('/', (req, res) => {
    console.log('Try get!');
    res.json({ message: 'Hello'});
})

module.exports = router;