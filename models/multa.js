
var jquery  = require('jquery')

class Multa {

    constructor(placa,serie){
        this.placa = placa;
        this.serie = serie;
    }
        consultaMulta = async (placa, serie)=>{
            const Nightmare = require('nightmare')
            const nightmare = Nightmare({ show: false  })
                let resultado = [];
                let mensaje = 'OK'
              await   nightmare
                // .on('console', (log, msg) => {
                //     console.log(msg)
                // })
                .goto('https://gobiernoenlinea1.jalisco.gob.mx/vehicular/')
                .wait(1000)
                .click('#ember40')
                .type('#placa', placa)
                .type('#numeroDeSerie', serie)
                .click('input[type="submit"]')
                .wait('#ember4 > div.page > div.page-content.d-flex.align-items-stretch > div.content-inner > div.screen-content > section > div > div:nth-child(3) > div > div > div.card-body')
                .evaluate( () =>{ 
                    const textos = [];
                    const multas =[];
                    var objs=[];
                    var obj={};

                    document.querySelectorAll("#ember4 > div.page > div.page-content.d-flex.align-items-stretch > div.content-inner > div.screen-content > section > div > div:nth-child(3) > div > div > div.card-body > div > table > tbody > tr > td.force-wrap").forEach(function(a){
                        textos.push( a.innerText);
                        })
                        
                    document.querySelectorAll("#ember4 > div.page > div.page-content.d-flex.align-items-stretch > div.content-inner > div.screen-content > section > div > div:nth-child(3) > div > div > div.card-body > div > table > tbody > tr > td.text-right").forEach(function(a){
                        multas.push( a.innerText);
                    })
                    
                    textos.forEach(function(value,index){
                        obj = {texto: value, multa: multas[index] }
                        objs.push(obj);
                    })
                    return objs;
                })  .end()
                .then(function(result){
                    //console.log(result)
                    
                    var multas = [];
                    var item = {}
                    var text = '';
                    var dinero = '';
                    const lista = result;
                    
                    
                    resultado = result
                    mensaje = 'OK';
                    
                }).catch((e)=>{
                    mensaje = 'Lo datos no coinciden.';
                })
                

        return {resultado,mensaje};
        }
}

module.exports = {
    Multa
}