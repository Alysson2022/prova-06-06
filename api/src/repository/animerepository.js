

export async function Anime(nome) {
    const comando = 
    `select     ID_ANIME        id,
                NM_ANIME        nome,
        from    TB_ANIME
        where   NM_ANIME        = ?`
    
    const [linhas] = await con.query(comando[nome]);
    return linhas[0];    
}