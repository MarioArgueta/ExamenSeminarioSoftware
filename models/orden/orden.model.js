var MongoDB = require('../../models/dbm');
var ObjectID = require('mongodb').ObjectID;

class OrdenModel{
    constructor(){
        this.collection = null
        MongoDB.getDb()
         .then (
           (db)=>{
             this.collection = db.collection("Orden");
           }
        )
         .catch((ex)=>{
          throw(ex);
        });
    }
    async getAll(){
      try {
        let rslts = await this.collection.find({}).toArray();
        return rslts;
      }catch(ex){
        throw(ex);
      }
     }
     async getById(id){
        try{
          const _id = new ObjectID(id);
          let oneDoc = await this.collection.findOne({_id});
          return oneDoc;
        }catch(ex){
          throw(ex);
        }
      }
      async addOne( document ) {
        try{
          var result = await this.collection.insertOne(document);
          return result;
        }catch(ex){
          throw(ex);
        }
      }
      async updateById(id, nombre,correo,telefono,producto,formaPago, estadoOrden){
        try{
          const _id = new ObjectID(id);
          const updOps = {"$set":{"nombre":nombre, "correo":correo, "telefono":telefono, "producto":producto, "formaPago":formaPago, "estadoOrden":estadoOrden}};
          let updDoc = await this.collection.findOneAndUpdate({ _id }, updOps, { returnOriginal:false});
          return updDoc;
        }catch(ex){
          throw(ex);
        }
      }
}
module.exports = ordenModel;