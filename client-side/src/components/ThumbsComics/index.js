import { WrapperThumbs, Thumbs, BotaoVerMais } from '../Main/styles';
import { useEffect, useState, useCallback } from 'react';
import api from '../../services/api';

function ThumbsComics() {
    const [comics, setComics] = useState([]);

    useEffect(() => {
        api
            .get('comics')
            .then(response => {
                setComics(response.data.data.results);
                console.log("Segundo log", comics)
            })
            .catch(error => console.log('Esse é o erro', error))
    }, [])

    const verMaisComics = useCallback(async () => {
        try {
            const offset = comics.lenght;
            const response = await api.get('comics', {
                params: {
                    offset: 20,
                },
            });

            setComics([...comics, ...response.data.data.results]);

        } catch (erro) {
            console.log(erro)
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
