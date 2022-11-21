const express = require('express')
const booksDATA = require('../models/book')
const { findById } = require('../models/book')
const router = express.Router() //routing function
const DATA = require('../models/book') 
//to get the books list
router.get('/book', async (req, res) => {

    try {

        const list = await DATA.find()
        res.send(list)


    } catch (error) {
        console.log(error)
    }

})
router.put('/book', async (req, res) => {
    try {

        let id = req.body._id
        let item = {  //to fetch and save data from front end in server
            bookname: req.body.bookname,
            author: req.body.author
        }
        let updateData = { $set: item }
        let updatebook =  DATA.findByIdAndUpdate({ 'id': id }, updateData)
        res.send(updatebook)
    } catch (error) {
        console.log(error)

    }
})
router.post('/addbook', async (req, res) => {
    try {

        console.log(req.body)
        let item = {  //to fetch and save data from front end in server
            bookname: req.body.bookname,
            author: req.body.author
        }


        const newbook = new DATA(item) //to check incoming data
        const savebook = await newbook.save() //mongoDB save

        res.send(savebook)


    } catch (error) {

        console.log(error)
    }
})






router.delete('/book/:id', async (req, res) => {
    try {
        let id = req.params.id
        const deletebook = await DATA.findByIdAndDelete(id)
        res.send(deletebook)


    } catch (error) {
        console.log(error)

    }
})





   
   

router.post('/signup',async(req,res)=>{
    try {
        let item = {
            name : req.body.name,
            email : req.body.email,
            password : req.body.password
        }
            const newuser = new DATA(item)
            const saveuser = await newuser.save()
            res.send(saveuser)
        
        
    } catch (error) {
        console.log(error)
    }
})

    



module.exports = router
