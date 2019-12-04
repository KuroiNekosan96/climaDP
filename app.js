//Importo ubicacion.js
const ubicacion = require('./controlador/ubicacion');
const clima = require('./controlador/clima')

const argv = require('yargs').options({
    nombre: {
        alias: 'n',
        desc: 'Nombre de la ciudad para obtener el clima',
        demand: true
    }

}).argv;
//Promesas
//--ubicacion.getCiudadLatLon(argv.nombre).then(console.log);

//ubicamos latitud y longitud
//--clima.getClima(-0.19, -78.5).then(console.log);

//Quiero que getClima y ciudad me aparezcan en una sola

// const getInfo = (ciudad) => {

//     city = ubicacion.getCiudadLatLon(ciudad)


//     /////////////////////////////////////////
//     // const resp = await instance.get()
//     const city = await instance.get()
//     if (city.data.Results.length === 0) {
//         throw new Error(`No existe resultados para ${ciudad}`);
//     }

//     const data = resp.data.Results[0];
//     const name = data.name;
//     const lat = data.lat;
//     const lon = data.lon;

//     clim = clima.getClima(lat, lon);

//     /////////////////////////////////////


//     return {
//         city,
//         clim
//     }
// }

// getInfo(argv.nombre).then(console.log).catch(console.log);


///////////////////////////////////////segundo intento by https://medium.com/@christopher.ramirezdev/crear-una-aplicaci%C3%B3n-de-clima-con-mapbox-y-nodejs-3e1b0dfd7169
const getInfo = async(ciudad) => {
    try {
        let coords = await ubicacion.getCiudadLatLong(ciudad);
        let temp = await clima.getClima(coords.lat, coords.lon);
        return `El clima en ${ciudad} es de ${temp}`
    } catch (error) {
        console.log(`No se pudo determinar el clima en ${ciudad}`);
    }
};
getInfo(argv.nombre).then(res => {
    console.log(res);
}).catch(err => console.log(err));