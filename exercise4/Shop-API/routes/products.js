const express = require('express')
const router = express.Router()
//uuId on erillinen kirajsto joka otetaan tässä käyttöön. Kirjasto asennettu npm paketti managerilla konsolissa ensin juuri kansioon.
const { v4: uuidv4 } = require('uuid');

const products =[
{
    "id": uuidv4(),
    "name": "Iphone X",
    "manufacturer": "Apple",
    "category": "Phone",
    "decription": "You can have a nice call",    
    "price": 900
},
{
    "id": uuidv4(),
    "name": "Galaxy 22",
    "manufacturer": "Samsung",
    "category": "Phone",
    "decription": "Market's slowest one",   
    "price": 650
},
{
    "id": uuidv4(),
    "name": "Nord 2",
    "manufacturer": "OnePlus",
    "category": "Phone",
    "decription": "Your phone gonna die after 2 weeks",   
    "price": 350
}];

//haetaan kaikki tiedot listalta
router.get('/', (req, res) =>{ //ei tarvita erikseen laittaa ('/polkua'), koska ollaan tiedoston sisällä
    res.json(products);
});

//haetaan yksittäinen tuote Id:n mukaan
router.get('/:productsId', (req, res) =>{ 

    //etsitään listasta id ja polussa olevaa id:tä
    let foundIndex = products.findIndex(p => p.id === req.params.productsId || p.name === req.params.productsId || p.manufacturer === req.params.productsId || p.category === req.params.productsId);
    if(foundIndex === -1) {
        res.sendStatus(404);
        return;
    } else {
        res.json(products[foundIndex]);
    }
})
//ID:n perusteella poistetaan tietty tuote
router.delete('/:productsId', (req, res) => {

    let foundIndex = products.findIndex(p => p.id === req.params.productsId);

    if (foundIndex === -1) { 
        res.sendStatus(404);
    }else {
        products.splice(foundIndex); // tällä poisteaa
        res.sendStatus (202);
    }
});

router.post('/', (req, res) => {
    console.log(req.body);

    //lisätään taulukkoon uusi olio, jossa tuotteen tiedot

    products.push({ //laitetaan products listaan tietoa
        id: uuidv4(),
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        category: req.body.category,
        description: req.body.description,
        price: req.body.price

    });
    res.sendStatus(201);

});

//Päivitetään yhden tuotteen tietoja joka on haettu ID:n mukaan.
router.put('/:productsId',(req, res) => {
    //Tämä komento hakee products taulukosta oikean tuotteen, kun käyttäjä on syöttänyt tuotteen ID numeron haettavaksi
    //products.find palauttaa koko haettavan elementin kun taas esim products.findIndex palauttaa pelkän indexin.
    //Eli alla oleva haku palauttaa foundProduct muuttujaan koko haetun olion.
    let foundProduct = products.find(p => p.id === req.params.productsId);
    if(foundProduct){
        foundProduct.name = req.body.name;
        foundProduct.manufacturer = req.body.manufacturer;
        foundProduct.category = req.body.category;
        foundProduct.description = req.body.description;
        foundProduct.price = req.body.price;
        res.sendStatus(202);
    }
    else{
        res.sendStatus(404);
    }
})    


module.exports = router