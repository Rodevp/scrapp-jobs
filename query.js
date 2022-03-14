const saveResult = (client, result, idLocation, idTecnology) => {
    client.query(`
        INSERT INTO resultados(resultado, id_pais, id_tecnologia)
	        VALUES(${result}, ${idLocation}, ${idTecnology});
    `, (err, res) => {

    })
}

module.exports = {
    saveResult
}