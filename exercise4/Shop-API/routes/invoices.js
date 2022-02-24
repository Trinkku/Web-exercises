const express = require('express')
const router = express.Router()
//uuId on erillinen kirajsto joka otetaan tässä käyttöön. Kirjasto asennettu npm paketti managerilla konsolissa ensin juuri kansioon.
const { v4: uuidv4 }= require('uuid');

const invoices = [

    {
        "id": uuidv4,
        "products": "lalala",
        "date": "2020-02-14",
        "total": 20
    }
];

//haetaan kaikki tiedot listalta
router.get('/', (req, res) =>{ //ei tarvita erikseen laittaa ('/polkua'), koska ollaan tiedoston sisällä
    res.json(invoices);
});

//hakee käyttäjän kuittia
router.get('/:userId', (req, res) => {
    const invs = invoices.filter(t => t.userId == req.params.userId);
    if (invs.length > 0)
        res.json(invs);
    else
        res.sendStatus(404);
}); 
//Get a single invoice of a user
router.get('/:userId/:invoiceId', (req, res) => {
    const invs = invoices.find(t => t.userId == req.params.userId && t.id == req.params.invoiceId);
    if (invs)
        res.json(invs);
    else
        res.sendStatus(404);
});

//Purchase / Create new invoice
router.post('/', (req, res) => {
    invoices.push({
        id: uuidv4(),
        userId: req.body.userId,
        prodIds: req.body.prodIds,
        totalSum: req.body.totalSum,
        date: req.body.date
    });
    res.sendStatus(201);
});

//Delete invoice of a user
router.delete('/:userId/:invoiceId', (req, res) => {
    const invoiceId = invoices.findIndex(t => t.userId == req.params.userId && t.id == req.params.invoiceId);
    if (invoiceId === -1)
        res.sendStatus(404);
    else {
        invoices.splice(invoiceId, 1);
        res.sendStatus(202);
    }
});

module.exports = router