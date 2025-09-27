import React from 'react';

const SelectedPlayer = ({ player, removePlayer }) => {
    const { player_img, player_name, playing_role, batting_style, bowling_style } = player;
    return (
        <div className='border-1 border-gray-400 flex justify-between items-center p-4 m-4 rounded-2xl'>
            <div className='flex items-center gap-5'>
                <img className='w-18 h-18 rounded-2xl' src={player_img} alt="" />
                <div>
                    <h2 className='text-2xl font-semibold'>{player_name}</h2>
                    <p className='opacity-60'>{playing_role === 'Bowler' ? bowling_style : batting_style}</p>
                </div>
            </div>
            <div>
                <img onClick={() => removePlayer(player)} src="https://i.ibb.co.com/B58LhkcQ/Frame.png" alt="" />
            </div>
        </div>
    );
};

export default SelectedPlayer;