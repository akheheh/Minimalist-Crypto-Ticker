import React from 'react';

const Header = (props) => {
    return(
        <header className = "header">
            <h1 className = "title">{props.title}</h1>
            <h2 className = "subtitle">{props.subtitle}</h2>
        </header>
    );
}


export default Header;