const optionsSelectTurn = [
    {value:1, text:"0 a 6 hs"},
    {value:2, text:"6 a 12 hs"},
    {value:3, text:"12 a 18 hs"},
    {value:4, text:"18 a 24 hs"}
]

const optionsSelectDay = [
    {value:1, text:"Primer dia"},{value:2, text:"Segundo dia"},
    {value:3, text:"Tercer dia"},{value:4, text:"Cuarto dia"},
    {value:5, text:"Quinto dia"},{value:6, text:"Sexto dia"}
]

const optionsSelectMonth = [
    {value:1,text:"Enero"},{value:2,text:"Febrero"},
    {value:3,text:"Marzo"},{value:4,text:"Abril"},
    {value:5,text:"Mayo"},{value:6,text:"Junio"},
    {value:7,text:"Julio"},{value:8,text:"Agosto"},
    {value:9,text:"Septiembre"},{value:10,text:"Octubre"},
    {value:11,text:"Noviembre"},{value:12,text:"Diciembre"}
]

export const optionsSelects =  [
    {options:optionsSelectTurn,name:"turn", text:"Turno actual"},
    {options:optionsSelectDay,name:"dayT", text:"Dia en turno"},
    {options:optionsSelectMonth,name:"monthR", text:"Ultimo mes de reten"}
]

export const contidionOpInputs = [
    {input:{name:"year",id:"year",type:"number", text:"Año"}},
    {input:{name:"date",id:"date",type:"date", text:"Fecha"}},
    {input:{type:"submit", text:"Enviar"}}
]