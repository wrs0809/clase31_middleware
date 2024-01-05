module.exports = {
    admin: (req, res) => {
        const usuarioIngresado = req.query.user;
        res.send(`Hola Admin: ${usuarioIngresado}`);
    }
}