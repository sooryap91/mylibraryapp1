 const mongoose = require('mongoose')
 const Schema = mongoose.Schema
//  var ObjectId = Schema.bookid;
 const BooksSchema = new Schema({
     name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    bookname: {
        type: String,
        
    },
    author: {
        type: String,
        
    }
    
})


let data = mongoose.model('books', BooksSchema)

module.exports = data