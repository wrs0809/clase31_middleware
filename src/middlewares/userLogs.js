const fs = require('fs');
const path = require('path');
const logsFilePath = path.join(__dirname, '../logs/userLogs.txt');


function logDeRutas(req, res, next){
const log = `El usuario ingresó a la ruta: ${req.url} \n`
fs.appendFileSync(logsFilePath, log)
next()
}

module.exports = logDeRutas;