const userAuthorized = ["ada","greta","vim","tim"];
const userAutorization = (req,res,next) => {
    
    const usuarioIngresado = req.query.user;
    if (userAuthorized.includes(usuarioIngresado.toLowerCase())){
        next()
    }else{
        res.send("No tienes los privilegios para ingresar")
    }
}

module.exports = userAutorization
