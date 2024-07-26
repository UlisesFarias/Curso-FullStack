const {importarArchivo} = require('./collectibles');

const hotToys = importarArchivo ("figuras1");
const bandai = importarArchivo("figuras2");
const starWars = importarArchivo("figuras3");

const unifiedCollectibles = [
    ...hotToys,
    ...bandai,
    ...starWars
]
const collectibles = {
    figuras: unifiedCollectibles,  
    listFigures: function(figura = this.figuras) {
        figura.forEach(({marca,nombre,precio})=>{
            console.log(`
            -----------------------------
            MARCA : ${marca}
            NOMBRE : ${nombre}
            PRECIO : ${precio}
            ----------------------------
            `);
        })
    },
    figuresByBrand:function (marca) {
        return this.figuras.filter(
            (figura) => figura.marca.toLowerCase() === marca.toLowerCase()
        );
    }
}
//console.log(collectibles.figuras);
//console.log(collectibles.listFigures());
//console.log(collectibles.figuresByBrand("star wars"));

