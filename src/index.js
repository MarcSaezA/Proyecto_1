 const express = require("express");
 const bodyParser = require('body-parser');
 const app = express();
 app.use(bodyParser.urlencoded({ extended: false }));
 app.use(bodyParser.json());
// let gamer = {
//     name: '',
//     surname: '',
//     score: ''
// };
// let respuesta = {
//     error: false,
//     codigo: 200,
//     mensaje: ''
// };
// app.get('/', function (req, res) {
//     respuesta = {
//         error: true,
//         codigo: 200,
//         mensaje: 'Punto de inicio'
//     };
//     res.send(respuesta);
// });
// app.route('/gamer')
//     .get(function (req, res) {
//         respuesta = {
//             error: false,
//             codigo: 200,
//             mensaje: ''
//         };

//         res.send(respuesta);
//     })
//     .post(function (req, res) {
//         if (!req.body.name || !req.body.surname || !req.body.score) {
//             respuesta = {
//                 error: true,
//                 codigo: 502,
//                 mensaje: 'El campo nombre, apellido y score necesarios'
//             };
//         } else {
//             if (gamer.name == req.body.name && gamer.surname == req.body.surname) {
//                 respuesta = {
//                     error: true,
//                     codigo: 503,
//                     mensaje: 'El jugador ya fue creado previamente'
//                 };
//             } else {
//                 gamer = {
//                     surname: req.body.surname,
//                     score: req.body.score,
//                     name: req.body.name
                    
//                 };
//                 respuesta = {
//                     error: false,
//                     mensaje: 'Jugador creado',
//                     codigo: 200,        
//                     respuesta: gamer
//                 };
//             }
//         }

//         res.send(respuesta);
//     })
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

app.get('/jugadores/:alias',function(req,res)
{

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
});
app.post(function (req, res) {
             if (!req.body.nombre || !req.body.apellido || !req.body.score ||!req.body.alias) {
                respuesta = {
                     error: true,
                     codigo: 502,
                     mensaje: 'El campo alias, nombre, apellido y score necesarios'
                 };
             } else {
                 if (jugadores.nombre == req.body.nombre && jugadores.apellido == req.body.apellido && jugadores.alias==req.body.alias) {
                     respuesta = {
                         error: true,
                         codigo: 503,
                        mensaje: 'El jugador ya fue creado previamente'
                     };
                 } else {
                     jugadores = {
                         apellido: req.body.apellido,
                         score: req.body.score,
                         nombre: req.body.nombre
                        
                     };
                     respuesta = {
                         error: false,
                         mensaje: 'Jugador creado',
                         codigo: 200,        
                         respuesta: jugadores
                     };
                 }
             }



 app.listen(3000, () => {
     console.log("El servidor está inicializado en el puerto 3000");
});
