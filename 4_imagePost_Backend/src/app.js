const express = require('express');
const app = express();

const cors = require('cors');  //shreiyans yt video @4:24:00
app.use(cors());

const postModel = require('./models/postModel');

app.use(express.json());
const multer = require('multer');
const upload = multer({storage: multer.memoryStorage()});  //So multer will: NOT save file in folder Store file in RAM and Adds it to → req.file

const uploadImage = require('./services/imagekit');  //upload.single() -> “Give me the file whose name is postImage” 

app.post('/post',upload.single('postImage'),async(req,res)=>{
    const caption = req.body.caption;
    const image = req.file;

    const result = await uploadImage(image.buffer);
    await postModel.create({
        imageURL: result.url,
        caption: caption
    })
    res.status(201).json({
        messgae:"Sucess"
    })
})

app.get('/post',async(req,res)=>{
    const arr = await postModel.find();
    res.status(200).json({
        posts:arr
    })
})

module.exports = app