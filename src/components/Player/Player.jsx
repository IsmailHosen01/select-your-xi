import React, { useState } from 'react';
import userImg from '../../assets/Group.png';
import flagIcon from '../../assets/report1.png';
import { toast } from 'react-toastify';

const Player = ({ player, availableBalance, setAvailableBalance, purchasedPlayers, setPurchasedPlayers }) => {
    const { player_img, player_name, player_country, playing_role, rating, batting_style, bowling_style, price } = player;
    const [isSelected, setIsSelected] = useState(false)

    const handleSelected = () => {
        if (availableBalance < price) {
            toast('Not enough coin!!')
            return;
        }

        if (purchasedPlayers.length === 6) {
            toast('6 player already selected!')
            return
        }

        setIsSelected(true);
        setAvailableBalance(availableBalance - price);
        setPurchasedPlayers([...purchasedPlayers, player]);
        toast('Player purchased!')
    };

    return (
        <div>
            <div className="card bg-base-100 shadow-sm p-4">
                <figure>
                    <img className='rounded-lg w-full h-[200px]'
                        src={player_img}
                        alt="Shoes" />
                </figure>
                <div className=" space-y-2.5 mt-4">
                    <div className='flex items-center gap-2'>
                        <img className='w-[20px]' src={userImg} alt="" />
                        <h2 className="card-title text-xl font-semibold">{player_name}</h2>
                    </div>

                    <div className='flex items-center justify-between border-b-1 border-gray-400 pb-4'>
                        <div className='flex items-center gap-2.5'>
                            <img src={flagIcon} alt="" />
                            <p className=' opacity-50'>{player_country}</p>
                        </div>
                        <button className='btn rounded-lg'>{playing_role}</button>
                    </div>

                    <div className='flex items-center justify-between'>
                        <p className='font-bold'>Rating</p>
                        <p className='font-bold'>{rating}</p>
                    </div>

                    <div className='flex items-center justify-between'>
                        <p className=' font-semibold'>{batting_style}</p>
                        <p className=' opacity-70'>{bowling_style}</p>
                    </div>

                    <div className="card-actions flex items-center justify-between">
                        <p className='font-semibold'>Price: ${price}</p>
                        <button disabled={isSelected} onClick={() => { handleSelected(player) }}
                            className="btn rounded-lg">{isSelected ? 'Selected' : 'Choose Player'}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;