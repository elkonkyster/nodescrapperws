const { response, request } = require('express');
const {Multa} = require('../models/multa')


const getMultasJal =  async (req = request,res = response) =>{
    const {placa, serie} = req.query;
    //const {placa, serie} = req.body;
    console.log({placa, serie})
    var multa = new Multa(placa,serie);
     var {resultado,mensaje} = await multa.consultaMulta(placa,serie);
    //console.log(params)
    res.json({
        resultado,mensaje
    })
}

module.exports ={ 
    getMultasJal
}