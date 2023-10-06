const mongoose = require('mongoose')
require('dotenv').config()

const mongoPass = process.env.MONGO_PW

const url =
  `mongodb+srv://clemensajanes:${mongoPass}@testcluster.aqhxr4p.mongodb.net/noteApp?retryWrites=true&w=majority`

mongoose.set('strictQuery',false)
mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)


const note = new Note({
  content: 'It\'s windy outside',
  important: false,
})



note.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
})

Note.find({}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})