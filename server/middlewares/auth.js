const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { TOKEN_SECRET, COOKIE_NAME } = require('../config');
const userService = require('../services/user');

module.exports = () => (req, res, next) => {
    if (parseToken(req, res)) {
        req.auth = {
            async register(username, email, password) {
                const token = await register(username, email, password);
                res.cookie(COOKIE_NAME, token);
            },
            async login(username, password) {
                const token = await login(username, password);
                res.cookie(COOKIE_NAME, token);
            },
            logout() {
                console.log('logout here!');
                res.clearCookie(COOKIE_NAME);
            }
        };
        next();
    }
};

async function register(username, email, password) {

    const existing = await userService.getUserByEmail(email);

    if (existing) {
        const err = new Error('Email is taken!');
        err.status = 409;
        throw err;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userService.createUser(username, email, hashedPassword);

    // console.log(user);
    // login user
    return generateToken(user);
}

async function login(username, password) {
    const user = await userService.getUserByUsername(username);
    if (!user) {
        const err = new Error('No such user');
        err.status = 401;
        throw err;
    }

    const hasMatch = await bcrypt.compare(password, user.hashedPassword);
    if (!hasMatch) {
        const err = new Error('Incorect password');
        err.status = 401;
        throw err;
    }

    return {
        _id: user._id,
        username: user.username,
        email: user.email,
        accessToken: generateToken(user)
    }

}

function generateToken(userData) {
    return jwt.sign({
        _id: userData._id,
        username: userData.username,
        email: userData.email
    }, TOKEN_SECRET);
}

function parseToken(req, res) {
    const token = req.cookies[COOKIE_NAME];
    //const token = req.headers['x-authorization'];
    if (token) {
        try {
            const userData = jwt.verify(token, TOKEN_SECRET);
            req.user = userData;
            res.locals.user = userData;
            return true;
        } catch (err) {
            res.clearCookie(COOKIE_NAME);
            // res.redirect('/login');
            // res.status(401).json( {message: 'Invalid access token. Please sign in.'});
            return false
        }
    }
    return true;
}