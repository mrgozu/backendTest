
const express = require('express');
const cors = require('cors');

const postPg = require('../routes/postPgRouter');
const postOrm = require('../routes/postOrmRouter');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.port;
        this.apiPaths = {
            sequelize: '/sequelize',
            pg: '/pg'
        };
        this.middlewares();
        this.routes();

    }
    middlewares() {
        // configuracion basica de cors (permite todo)
        this.app.use(cors());

        // Lectura de body
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
    }
    routes() {
        this.app.use(this.apiPaths.pg, postPg);
        this.app.use(this.apiPaths.sequelize, postOrm);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor en puerto ', this.port);
        });
    }

}

module.exports = Server;