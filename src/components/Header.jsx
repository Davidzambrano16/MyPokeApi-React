import React from 'react';
import pokedexLogo from "../assets/images/pokedexLogo.png"

const Header = () => {
    return (
        <div className='header'>
            <div className='header--divMax'>
                <img className='divMax--img' src={pokedexLogo} alt="" />
            </div>
            <div className='header--divMin'>
                <div className='divMin--radiusMax'>
                    <div className='radiusMax--radiusMin'></div>
                </div>
            </div>
        </div>
    );
};
export default Header;