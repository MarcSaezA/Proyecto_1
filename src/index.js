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
let jugadores=[
        jugador = {
            posicion: '1',
            alias:'jjpez',
            nombre:'Josephe',
            apellido:'Pereza',
            score:'950'
        }
        ,
        jugador = {
            posicion: '2',
            alias:'sanzioj',
            nombre:'Juanjo',
            apellido:'Santz',
            score:'850'
        }
        ,
        jugador = {
            posicion: '3',
            alias:'uwumaker',
            nombre:'Martin',
            apellido:'Martinez',
            score:'795'
        }
    ];   
let respuesta= {
    error:'',
    codigo:'',
    mensaje:''
};
app.get('/ranking',function(req,res)
{
    res.send(jugadores);
});

app.get('/jugador')


 app.listen(3000, () => {
     console.log("El servidor está inicializado en el puerto 3000");
});
