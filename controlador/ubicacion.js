//se encargara de buscar la ciudad


const axios = require('axios');

const getCiudadLatLon = async(nombre) => {
        //console.log(argv.nombre);
        const ciudad = encodeURI(nombre);

        const instance = axios.create({
            //En este caso trabajamos con Quito por defecto
            // baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=Quito',
            baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ciudad}`,
            //timeout: 1000,
            headers: { 'x-rapidapi-key': '1f1794d53fmsh3a9cd4fbe933f55p195002jsna78fee705e37' }
        });

        const resp = await instance.get()
        if (resp.data.Results.length === 0) {
            throw new Error(`No existe resultados para ${nombre}`);
        }
        const data = resp.data.Results[0];
        const name = data.name;
        const lat = data.lat;
        const lon = data.lon;
        //Atributo valor 
        return {
            name,
            lat,
            lon
        }

        // instance.get()
        //     .then(resp => {
        //         console.log(resp.data.Results[0]);
        //     }).catch(err => {
        //         console.log("Error: ", err);
        //     });

    }
    //Exporto el metodo!
module.exports = {
    getCiudadLatLon
}

//node app -n Quito