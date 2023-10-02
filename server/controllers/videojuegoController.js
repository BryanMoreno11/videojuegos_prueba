//Importación de la conexión con la base de datos
const pool = require("../database");
//------------------Métodos
async function getVideojuegos(req, res) {
    try {
        const client = await pool.connect();
        const result = await client.query('select * from vista_videojuego');
        client.release();
        res.json(result.rows);


    } catch (err) {
        res.status(500).json({ error: "Error en el servidor" });
    }
}

//devolver una franquicia con un id
async function getVideojuego(req, res) {
    const { id } = req.params;
    const query = 'SELECT * FROM videojuego where id_videojuego=$1'
    const values = [id];
    try {
        const client = await pool.connect();
        const result = await client.query(query, values);
        client.release();
        res.status(200);
        if (result.rowCount > 0) {
            res.json(result.rows);
        } else {
            res.status(500).json({ message: 'No existe el videojuego' });
        }


    } catch (err) {
        res.status(500).json({ error: "Error en el servidor" });
    }


}

//función para insertar una franquicia
async function createVideojuego(req, res) {
    const { id_franquicia, nombre } = req.body;
    const query = 'INSERT INTO videojuego (id_franquicia, nombre) VALUES ($1, $2)';
    const values = [id_franquicia, nombre];
    try {
        const client = await pool.connect();
        const result = await client.query(query, values);
        client.release();
        if (result.rowCount > 0) {
            res.status(200).json({ message: 'Se guardó el videojuego' });
        } else {
            res.status(400).json({ message: 'No se guardó el videojuego' });
        }
    } catch (err) {
        res.status(500).json({ error: "Error en el servidor" });
    }
}

async function updateVideojuego(req, res) {
    const { id } = req.params;
    const { id_franquicia, nombre } = req.body;
    const query = 'UPDATE videojuego SET id_franquicia=$2, nombre=$3  WHERE id_videojuego=$1';
    const values = [id, id_franquicia, nombre];
    try {
        const client = await pool.connect();
        const result = await client.query(query, values);
        client.release();
        if (result.rowCount > 0) {
            res.status(200).json({ message: 'Se actualizó el videojuego' });
        } else {
            res.status(400).json({ message: 'No se actualizó' });
        }
    } catch (err) {
        res.status(500).json({ error: "Error en el servidor" });
    }
}

//eliminar ciudad por un id 
async function deleteVideojuego(req, res) {
    const { id } = req.params;
    const query = 'DELETE FROM videojuego where id_videojuego=$1'
    const values = [id];
    try {
        const client = await pool.connect();
        const result = await client.query(query, values);
        client.release();
        if (result.rowCount > 0) {
            res.status(200).json({ message: 'videojuego eliminado' });
        } else {
            res.status(500).json({ message: 'No existe el videojuego' });
        }


    } catch (err) {
        res.status(500).json({ error: "Error en el servidor" });
    }
}
//exportación de métodos
module.exports = {
    getVideojuegos,
    getVideojuego,
    updateVideojuego,
    deleteVideojuego,
    createVideojuego
};