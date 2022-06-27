
import './index.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { cadastrarAnime } from '../../api/animesApi'

export default function Cadastrar() {
    const [nome, setNome] = useState('');
    const navigate = useNavigate();

    async function cadastroAnime() {
        const resposta = cadastrarAnime(setNome);

        alert('Anime cadastrado com sucesso!');
    }

    async function verAnimes() {
        navigate('/consultar')
    }

    return (
        <main>
            <div>
                <h1>
                    digite o nome de um filme:
                </h1>
                <input type = 'text' value={nome} onChange={e => setNome(e.target.value)} />

                <button onClick = {cadastroAnime}>Salvar</button>
                <button onClick = {verAnimes}>Ver Animes</button>
            </div>
            <a href='../consultar'>mais</a>
        </main>
    )
}