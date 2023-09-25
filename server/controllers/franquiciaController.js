//Importación de la conexión con la base de datos
const pool = require("../database");
//------------------Métodos
async function getFranquicias(req, res) {
    try {
        const client = await pool.connect();
        const result = await client.query('select * from franquicia');
        client.release();
        res.json(result.rows);


    } catch (err) {
        res.status(500).json({ error: "Error en el servidor" });
    }
}

//devolver una franquicia con un id
async function getFranquicia(req, res) {
    const { id } = req.params;
    const query = 'SELECT * FROM franquicia where id_franquicia=$1'
    const values = [id];
    try {
        const client = await pool.connect();
        const result = await client.query(query, values);
        client.release();
        res.status(200);
        if (result.rowCount > 0) {
            res.json(result.rows);
        } else {
            res.status(500).json({ message: 'No existe la franquicia' });
        }


    } catch (err) {
        res.status(500).json({ error: "Error en el servidor" });
    }


}

//función para insertar una franquicia
async function createFranquicia(req, res) {
    const { nombre_franquicia } = req.body;
    const query = 'INSERT INTO franquicia (nombre_franquicia) VALUES ($1)';
    const values = [nombre_franquicia];
    try {
        const client = await pool.connect();
        const result = await client.query(query, values);
        client.release();
        if (result.rowCount > 0) {
            res.status(200).json({ message: 'Se guardó la franquicia' });
        } else {
            res.status(400).json({ message: 'No se guardó la franquicia' });
        }
    } catch (err) {
        res.status(500).json({ error: "Error en el servidor" });
    }
}

async function updateFranquicia(req, res) {
    const { id } = req.params;
    const { nombre_franquicia } = req.body;
    const query = 'UPDATE franquicia SET nombre_franquicia=$2  WHERE id_franquicia=$1';
    const values = [id, nombre_franquicia];
    try {
        const client = await pool.connect();
        const result = await client.query(query, values);
        client.release();
        if (result.rowCount > 0) {
            res.status(200).json({ message: 'Se actualizó la franquicia' });
        } else {
            res.status(400).json({ message: 'No se actualizó' });
        }
    } catch (err) {
        res.status(500).json({ error: "Error en el servidor" });
    }
}

//eliminar ciudad por un id 
async function deleteFranquicia(req, res) {
    const { id } = req.params;
    const query = 'DELETE FROM franquicia where id_franquicia=$1'
    const values = [id];
    try {
        const client = await pool.connect();
        const result = await client.query(query, values);
        client.release();
        if (result.rowCount > 0) {
            res.status(200).json({ message: 'franquicia eliminada' });
        } else {
            res.status(500).json({ message: 'No existe la franquicia' });
        }


    } catch (err) {
        res.status(500).json({ error: "Error en el servidor" });
    }
}
//exportación de métodos
module.exports = { getFranquicias, getFranquicia, updateFranquicia, deleteFranquicia, createFranquicia };