

import { Anime } from '../repository/animerepository.js'
import { Router } from 'express'

const server = Router();



server.get('/animes', (req, resp) => {
    try{
        
    }
})




server.post('/animes/postar', async (req, resp) => {
    try{
        const { nome } = req.body;
        const resposta = await Anime(nome);

        resp.send(resposta);
    }
    catch(err) {
        resp.status(401).send({
            erro: err.message
        })
    }
})