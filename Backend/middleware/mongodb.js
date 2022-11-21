const mongoose = require('mongoose') //db
mongoose.connect('mongodb+srv://suriya091:susapadm@cluster0.iswcfwz.mongodb.net/libraryapp?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}). then(()=>{
    console.log('mongoDB connected successfully!!!')
}).catch((error)=>{
    console.log(error.message)
})