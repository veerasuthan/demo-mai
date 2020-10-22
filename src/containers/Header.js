import React from 'react';
import { useHistory } from 'react-router-dom';

function Header(props) {
    const history = useHistory();
    const { location: { pathname }} = history;
    return (
        <header>
            <div>
                <img className="site_logo" src={require('../assets/maibeer-logo.svg')} />
            </div>
            {
                pathname !== "/" && (
                    <div>
                    <button className="close-icon" onClick={() => {
                        history.push("/")
                    }}>X</button>
                </div>
                )
            }
        </header>
    )
}

export default Header;