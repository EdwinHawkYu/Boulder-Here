const request = require('request');
const fs = require('fs');

function base64_encode(image) {
  // read binary data
  var bitmap = fs.readFileSync(image);
  // convert binary data to base64 encoded string
  return bitmap.toString('base64');
}

function upload(req, res) {
    console.log(req.file)
    let image = base64_encode(req.file.path);
  }
  
  // req.file:
//   {
//     fieldname: 'image',
//     originalname: 'cat_pic.jpg',
//     encoding: '7bit',
//     mimetype: 'image/jpeg',
//     destination: 'uploads/',
//     filename: '2fa2c0c9ae2178881ed5871e272f4456',
//     path: 'uploads/2fa2c0c9ae2178881ed5871e272f4456',
//     size: 5890
//   }