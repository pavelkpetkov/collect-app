const express = require('express');
const cors = require('cors');
const { PORT } = require('./config')
const databaseConfig = require('./config/database');
const expressConfig = require('./config/express');
const routesConfig = require('./config/routes');


start();

async function start() {
    const app = express();

    app.use(cors({
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true
    }));

    await databaseConfig(app);
    expressConfig(app);
    routesConfig(app);

    //TODO remove in production:
    app.get('/', (req, res) => res.send('It works!'));

    app.listen(PORT, () => {
        console.log(`Application started at http://localhost:${PORT}`);
    });
};