const express = require('express')
const router = express.Router()
//uuId on erillinen kirajsto joka otetaan tässä käyttöön. Kirjasto asennettu npm paketti managerilla konsolissa ensin juuri kansioon.
const { v4: uuidv4 }= require('uuid');

const user = [

    {
        "id": uuidv4,
        "name": "Matti Meikäläinen",
        "address": "Jokikatu 3"
    }
];

//haetaan kaikki tiedot listalta
router.get('/', (req, res) =>{ //ei tarvita erikseen laittaa ('/polkua'), koska ollaan tiedoston sisällä
    res.json(user);
});

router.post('/', (req, res)=>{
    console.log(req.body);
   
    user.push({ 
        id: uuidv4(), 
        name: req.body.name,
        address: req.body.address
    })
   });
   
   

module.exports = router