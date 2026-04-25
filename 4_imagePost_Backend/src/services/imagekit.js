const ImageKit = require('@imagekit/nodejs');
require('dotenv').config();

//allowing your application to interact with imagekit services and upload files to your account using your public and private keys for identification.
const imagekit = new ImageKit({
    publicKey: process.env.imagekit_publicKey,  //username
    privateKey: process.env.imagekit_privateKey  //password
})

async function uploadImage(buffer){                   //creating function
    const result = await imagekit.files.upload({         //main process
        file: buffer.toString("base64"),
        fileName: 'imagekit.jpg'
    }) 
    return result;
}

module.exports = uploadImage;