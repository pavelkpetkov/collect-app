const router = require('express').Router();

router.post('/register', async (req, res) => {
        try {
            
            // console.log('before!');
            // console.log(req.body);

            await req.auth.register(req.body.username, req.body.email, req.body.password);
            // console.log('after!');
            res.end();

        } catch (err) {
            console.log(err.message);
        }
    }
);

router.post('/login', async (req, res) => {
    try {

            // console.log(req.body);

        await req.auth.login(req.body.username, req.body.password);
        res.end();
    } catch (err) {
        console.log(err.message);
    }
});

router.get('/logout', (req, res) => {
    req.auth.logout();
    // res.redirect('/');
});

module.exports = router;