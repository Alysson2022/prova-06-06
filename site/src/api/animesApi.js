import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000'
})


export async function listarAnimes() {
    const resposta = await api.get('/animes');
    return resposta.data;
}

export async function cadastrarAnime(nome) {
    const resposta = await api.post('/animes', {
        nome: nome
    })
    return resposta.data;
}