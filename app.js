const express = require('express');

const app = express();

const DUMMY_EQUIPOS = [
    {
        id:'t1',
        equipo: 'Barcelona SC',
        jugador1:"Burrai",
        jugador2:"Díaz",
        jugador3:"Fydriszewski",
        jugador4:"Rodriguez",
        jugador5:"Perlaza",
        jugador6:"Rangel",
        jugador7:"Ramírez"

    },
    {
        id:'t2',
        equipo: 'Barcelona FC',
        jugador1:"ter Stegen",
        jugador2:"Cancelo",
        jugador3:"Martínez",
        jugador4:"Christensen",
        jugador5:"Alonso",
        jugador6:"Gavi",
        jugador7:"Pedrí"
    },
    {
        id:'t3',
        equipo: 'Machester United',
        jugador1:"Heaton",
        jugador2:"Lindelof",
        jugador3:"Maguire",
        jugador4:"Shaw",
        jugador5:"Williams",
        jugador6:"Fernandez",
        jugador7:"Van De Beek"
    }
];

app.get('/api/equipos',(req,res,next)=>{
    const equipos = DUMMY_EQUIPOS;
    res.send(equipos);
    next();
})

app.get('/api/places/:tid',(req,res,next)=>{
    const equipos = DUMMY_EQUIPOS.find(t=>{
        return t.id == req.params.tid;
    })
});

app.listen(3000);