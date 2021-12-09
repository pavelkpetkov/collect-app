const router = require('express').Router();

router.post('/register',
    async (req, res) => {
        
        try {
            
            console.log('before!');
            console.log(req.body);

            await req.auth.register(req.body.username, req.body.email, req.body.password);
            console.log('after!');
            res.redirect('/');
        } catch (err) {
            console.log(err.message);
        }
    }
)

module.exports = router;