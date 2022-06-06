

import { Anime } from '../repository/animerepository.js'
import { Router } from 'express'

const server = Router();



server.get('/animes', (req, resp) => {
    try{
        const resposta = req.params.resposta;

        resp.send({
            resultado: resposta
        })
    }
    catch(err) {
        resp.status(401).send({
            erro: err.message
        })
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

export default server;