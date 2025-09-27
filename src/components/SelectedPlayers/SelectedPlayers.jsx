import React from 'react';
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer';

const SelectedPlayers = ({ purchasedPlayers, removePlayer, setToggle }) => {
    return (
        <div className='max-w-[1200px] mx-auto'>
            {
                purchasedPlayers.map((player, index) => <SelectedPlayer key={index} removePlayer={removePlayer} player={player}></SelectedPlayer>)
            }
            <button onClick={() => setToggle(true)} className='py-2 px-5 border-1 border-gray-500 bg-[#E7FE29] text-black rounded-2xl font-bold'>Add More Player</button>
        </div>
        
    );
};

export default SelectedPlayers;