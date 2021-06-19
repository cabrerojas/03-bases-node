var colors = require('colors/safe');
const fs = require("fs");

const crearArchivo = async (base = 5, listar = true, hasta = 10) => {
    

    try {
       
       
    
        
        let salida = "";
    
        for (let i = 1; i <= hasta; i++) {
        salida += `${base} x ${i} = ${base * i}\n`;
        }
    
        if (listar){

            console.log("===================");
            console.log(colors.red.underline(`    Tabla del ${base}    `));
            console.log("===================");

            console.log(salida);
        
        }
    
        fs.writeFileSync(`tabla-${base}.txt`, salida);
    
        return colors.green(`tabla-${base}.txt`);
    
    } catch (e) {
        throw e;
    }



}

module.exports = { crearArchivo };
