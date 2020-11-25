const express = require("express");
let router = express.Router();
let rodenModel = require('../../models/orden.model')();

const OrdenModelClass = require('../../models/orden.model');
const mdbOrdenModel = new OrdenModelClass();

router.get('/all', async (req, res)=>{
    try{
      const rslt = await mdbOrdenModel.getAll()
      res.status(200).json(rslt);
    }catch(ex){
      console.log(ex);
      res.status(500).json({"msg":"Algo Paso Mal."});
    }
});

router.post('/new', async (req, res)=>{
    try{
      let { id, nombre,correo,telefono,producto,formaPago, estadoOrden} = req.body;
      var rslt = await mdbOrdenModel.addOne({nombre,correo,telefono,producto,formaPago, estadoOrden}); 
      res.status(200).json(rslt);
    }catch(ex){
      console.log(ex);
      res.status(500).json({ "msg": "Algo Paso Mal." });
    }
}
module.exports = router;