import { useState } from 'react';
import POKEMONS from '../.../../../assets/data/pokemons.json';
import PokemonCard from '../../components/PokemonCard/PokemonCard';


const GamePage = () => {

    const POKEMONS_GAME_SESSION = POKEMONS.map(item => {
        return Object.defineProperty(item, 'active', {
            value: false
        });
    });

    const [isActive, setActive] = useState(POKEMONS_GAME_SESSION);



    return (
        <div className="flex">
        {
            POKEMONS_GAME_SESSION.map(item => <PokemonCard
                isActive={item.active}
                name={item.name}
                key={item.id}
                id={item.id}
                type={item.type}
                img={item.img}
                values={item.values} />)
        }
    </div>
    );
}

export default GamePage;