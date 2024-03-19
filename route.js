const express = require('express');
const nodemailer=require('nodemailer');
const path=require('path');

const router=express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.dirname(process.mainModule.filename) + '/views'+'/contact.html');
});

router.get('/hackathon',(req,res)=>{
  res.sendFile(path.dirname(process.mainModule.filename)+'/views'+'/hackathon.html');
})

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'dwivedisumit333@gmail.com',
      pass: 'qbaf yeqd ldto ekiq'
    }
});
  
router.post('/submit-form', (req, res) => {
    const mailOptions = {
        from: `${req.body.email}`,
        to: 'dwivedisumit2004@gmail.com',
        subject: 'Query regarding codedoc',
        text: `${req.body.message}+ /n Ph:- ${req.body.number}`
    };
    // console.log(mailOptions.from,mailOptions.text);
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          res.status(200).redirect('/');
        }
    });
});


module.exports=router;