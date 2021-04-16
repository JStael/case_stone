import { WrapperThumbs, Thumbs, BotaoVerMais } from '../Main/styles';
import { useEffect, useState, useCallback } from 'react';
import api from '../../services/api';

function ThumbsCharacters() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        api
            .get('characters')
            .then(response => {
                setCharacters(response.data.data.results);
                console.log("Segundo log", characters)
            })
            .catch(error => console.log('Erro', error))
    }, [])

    const verMaisCharacters = useCallback(async () => {
        try {
            const offset = characters.lenght;
            const response = await api.get('characters', {
                params: {
                    offset,
                },
            });

            setCharacters([...characters, ...response.data.data.results])

        } catch (erro) {
            console.log(`Esse foi o erro ${erro}`)
        }
    }, [characters]);

    return (
        <>
            <WrapperThumbs>
                {characters.map(character => (
                    <Thumbs key={character.id} thumbnail={character.thumbnail}>
                        <div id="img" />
                        <h2>{character.name}</h2>
                        <p>{character.description}</p>
                    </Thumbs>
                ))}

            </WrapperThumbs>
            <BotaoVerMais onClick={verMaisCharacters}>
                <span>Ver mais</span>
            </BotaoVerMais>
        </>
    );
}

export default ThumbsCharacters;
