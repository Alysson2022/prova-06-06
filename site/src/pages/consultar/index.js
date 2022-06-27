import './index.scss'
import { listarAnimes } from '../../api/animesApi'

import { useState, useEffect } from 'react'

export default function Consultar() {
    const [animes, setAnimes] = useState([]);

    async function mostrarAnimes() {
        const resposta = await listarAnimes();
        console.log(resposta);
        setAnimes(resposta);
    }
 
    useEffect(() => {
        mostrarAnimes();
    }, [])

    return (
        <main>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOME</th>
                    </tr>
                </thead>

                <tbody>
                    {animes.map(item => 
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                        </tr>
                    )}
                    
                </tbody>
            </table>
        </main>
    )
}