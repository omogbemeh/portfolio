const express = require('express');
const request = require('request');
const router = express.Router();

router.get('/', async (req, res) => {
    const options = {
        uri: 'https://api.kanye.rest',
        method: 'GET'
    }

    request(options,(error, response, body) => {
        if (error) console.error(error);
        res.json(body)
    })
})

module.exports = router