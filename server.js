
const express = require('express');
const cors = require('cors');

const postPG = require('./routes/postPGRouter');
const postORM = require('./routes/postORMRouter');

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
        this.app.use(this.apiPaths.pg, postPG);
        this.app.use(this.apiPaths.sequelize, postORM);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor en puerto ', this.port);
        });
    }

}

module.exports = Server;