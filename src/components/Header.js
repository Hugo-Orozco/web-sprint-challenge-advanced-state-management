import React from 'react';
import { useHistory } from 'react-router-dom';

const Header = ()=>{
    const history = useHistory();

    const handleClick = () => {
        history.push('/');
    };

    return (
        <nav className="navbar navbar-dark bg-primary">
            <a className="navbar-brand" onClick={handleClick}>Smurf Village Database</a>
        </nav>
    );
}

export default Header;