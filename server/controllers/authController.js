const router = require('express').Router();

router.post('/register',
    async (req, res) => {

        try {

            await req.auth.register(req.body.username, req.body.email, req.body.gender, req.body.password);
            console.log(req.body);

            res.redirect('/');
        } catch (err) {
            console.log(err.message);
        }
    }
)

module.exports = router;