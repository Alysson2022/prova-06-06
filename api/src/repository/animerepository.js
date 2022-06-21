import { con } from './connection.js'

export async function Anime(nome) {
    const comando = 
    `select * from tb_animes`
    
    const [linhas] = await con.query(comando);
    return linhas;
}

export async function postarAnime(nome) {
    const comando = 
    `insert INTO TB_ANIMES (NM_ANIME)
    values (?)`

    const [resposta] = await con.query(comando[nome.nome]);
    nome.id = resposta.insertId;
    return nome;
}