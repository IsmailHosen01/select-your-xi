import React from 'react';
import navImage from '../../assets/logo.png'
import coin from '../../assets/Currency.png'

const Navbar = ({availableBalance}) => {
    return (
        <div>
            <div className="navbar max-w-[1200px] mx-auto">
                <div className="flex-1">
                    <a className="text-xl"><img className='w-[60px] h-[60px]' src={navImage} alt="" /></a>
                </div>
                <div className="flex items-center gap-1.5">
                    <span>{availableBalance}</span>
                    <span>Coin</span>
                    <img src={coin} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;