import React from 'react';
import '../styles.css'; //çünkü folder yaptık ..


export default function Header() { // herkes erişsin diye export default
    return (
        <div className='header'>
            <img className='logo' src='logo.png' alt="chadmovies"/>
            <h2 className='app-subtitle'>It's time for popcorn! Find your next movie here.</h2>
            
        </div>
    ); // 2 divi yan yana koyamazsın sibling olamlılar
}