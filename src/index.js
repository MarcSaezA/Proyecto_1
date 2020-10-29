 const express = require("express");
 const bodyParser = require('body-parser');
 const app = express();
 app.use(bodyParser.urlencoded({ extended: false }));
 app.use(bodyParser.json());
let jugadores=[{
            posicion: '1',
            alias:'jjpez',
            nombre:'Josephe',
            apellido:'Pereza',
            score:'950'
        }
        ,
        {
            posicion: '2',
            alias:'sanzioj',
            nombre:'Juanjo',
            apellido:'Santz',
            score:'850'
        }
        ,
        {
            posicion: '3',
            alias:'uwumaker',
            nombre:'Martin',
            apellido:'Martinez',
            score:'795'
        }
    ];   
let respuesta= {
    error:true,
    codigo:'',
    mensaje:'',
    totalplayers:''
};
app.get('/ranking',function(req,res)
{
    res.send(jugadores);
});


app.route('/jugadores/:alias')
    .get(function (req, res) {
        for(i = 0; i < jugadores.length; i++)
    {

        if (jugadores[i].alias==req.params.alias)
        {
            respuesta= {
                error:false,
                codigo:'',
                mensaje:'El jugador existe',
                respuesta:jugadores[i]
            }
        }
        
        
    }
    if(respuesta.error == true)
        {
            respuesta= {
                error:true,
                codigo:540,
                mensaje:'El jugador no existe',
                totalplayers:3
            }
            
            
        }
    res.send(respuesta);
    respuesta.error=true;

    })
    .post(function (req, res) {
        if (!req.body.nombre || !req.body.apellido || !req.body.score) {
            respuesta = {
                 error: true,
                 codigo: 502,
                 mensaje: 'El campo alias, nombre, apellido y score necesarios'
             };
         } else {
             if (jugadores.nombre == req.body.nombre && jugadores.apellido == req.body.apellido && jugadores.alias==req.params.alias) {
                 respuesta = {
                     error: true,
                     codigo: 503,
                    mensaje: 'El jugador ya fue creado previamente'
                 };
             } else {
                 jugador = {
                     apellido: req.body.apellido,
                     score: req.body.score,
                     nombre: req.body.nombre,
                     alias: req.params.alias                    
                 };
                 let nuevoJugador = jugadores.push(jugador);
                 respuesta = {
                     error: false,
                     mensaje: 'Jugador creado',
                     codigo: 200,        
                     respuesta: jugador
                 };
             }
             jugadores.sort((a,b)=>Math.sign(b.score-a.score));
             jugadores.forEach(function(item,index,array){item.position=index+1;})
        }
        res.send(respuesta);
    })
    .put(function (req, res) {
        
        if (!req.body.nombre || !req.body.apellido || !req.body.score) {
            respuesta = {
                 error: true,
                 codigo: 502,
                 mensaje: 'El campo alias, nombre, apellido y score necesarios'
             };
         } else {
             var playerexists = false;
            for(i = 0; i < jugadores.length; i++)
            {
                
                if (jugadores[i].alias==req.params.alias) {

                    jugadores[i] = {
                        apellido: req.body.apellido,
                        score: req.body.score,
                        nombre: req.body.nombre,
                        alias: req.params.alias 
                    };
                    playerexists = true;
                }  
            }
            if (!playerexists){
                respuesta = {
                    error: false,
                    mensaje: 'El jugador no existe',
                    codigo: 200,        
                    respuesta: jugadores
                };
            }
            else{
                respuesta = {
                    error: false,
                    mensaje: 'Jugador actualizado',
                    codigo: 200,        
                    respuesta: jugadores
                };
            }

        }
             jugadores.sort((a,b)=>Math.sign(b.score-a.score));
             jugadores.forEach(function(item,index,array){item.position=index+1;})
        res.send(respuesta);
    })
 app.listen(3000, () => {
     console.log("El servidor está inicializado en el puerto 3000");
});
