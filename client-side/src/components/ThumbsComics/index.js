import { WrapperThumbs, Thumbs, BotaoVerMais } from '../Main/styles';
import { useEffect, useState, useCallback } from 'react';
import api from '../../services/api';

function ThumbsComics() {
    const [comics, setComics] = useState([]);

    useEffect(() => {
        api.get('comics')
            .then(response => {
                setComics(response.data.data.results);
            })
            .catch(error => console.error('Esse é o erro', error));
    }, [])

    const verMaisComics = useCallback(async () => {
        try {
            const offset = comics.length;
            const { data } = await api.get('comics', {
                params: {
                    offset,
                }
            });

            setComics([...comics, ...data.data.results]);

        } catch (erro) {
            console.error(erro)
        }
    }, [comics]);

    return (
        <>
            <WrapperThumbs>
                {comics.map(comic => (
                    <Thumbs key={comic.id} thumbnail={comic.thumbnail}>
                        <div id="img" />
                        <h2>{comic.title}</h2>
                        <p>{comic.description}</p>
                    </Thumbs>
                ))}

            </WrapperThumbs>
            <BotaoVerMais onClick={verMaisComics}>
                <span>Ver mais</span>
            </BotaoVerMais>
        </>
    );
}

export default ThumbsComics;
