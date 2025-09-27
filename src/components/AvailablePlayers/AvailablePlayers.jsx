import React, { use } from 'react';
import Player from '../Player/Player';

const AvailablePlayers = ({ playersPromise, availableBalance, setAvailableBalance, purchasedPlayers, setPurchasedPlayers }) => {
    const players = use(playersPromise);
    return (
        <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                players.map((player,index) => <Player key={index} purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} player={player}></Player>)
            }
        </div>
    );
};

export default AvailablePlayers;