// Définition d'un schéma de données pour Appareil

const mongoose = require('mongoose')

// definition du schéma
const appareilSchema = mongoose.Schema(
  {
    name : {type: String, required: true},
    status : {type: String, required: true}
  }
)

// creation du model Appareil
module.exports = mongoose.model('Appareil', appareilSchema)
