const saveResult = (client, result, idLocation, idTecnology) => {
    client.query(`
        INSERT INTO resultados(resultado, id_pais, id_tecnologia)
	        VALUES(${result}, ${idLocation}, ${idTecnology});
    `, (err, res) => {
        if (err) {
            console.error(err, 'no pudo hacerse la query')
        }else {
            console.log(res)
        }
        client.end
    })
}

module.exports = {
    saveResult
}