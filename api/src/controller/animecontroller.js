

import { Anime, postarAnime } from '../repository/animerepository.js'
import { Router } from 'express'

const server = Router();



server.get('/animes', async (req, resp) => {
    try{
        const { nome } = req.body;
        const resposta = await Anime(nome);

        resp.send(resposta)
    }
    catch(err) {
        resp.status(401).send({
            erro: err.message
        })
    }
})




server.post('/animes', async (req, resp) => {
    try{
        const { nome } = req.body;
        const resposta = await postarAnime(nome);

        resp.send(resposta);
    }
    catch(err) {
        resp.status(401).send({
            erro: err.message
        })
    }
})

export default server;