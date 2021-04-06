const express = require('express');


class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT
        this.middlewares();
        this.routes();
    }

    routes(){
      this.app.use('/api/multasjal',require('../routes/multasjal'))
    }

    middlewares(){

        this.app.use(express.json());
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('SERVER RUNNING ON PORT', process.env.PORT)
        })
    }
}

module.exports = Server;