const fs = require('fs');

function importarArchivo (figuras){
    const json= fs.readFileSync("./datos/" + figuras + ".json", "utf-8")
    const array = JSON.parse(json);
    return array
}
module.exports = {importarArchivo}

