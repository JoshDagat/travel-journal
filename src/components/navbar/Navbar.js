import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className='navbar'>
            <FontAwesomeIcon className='navbar__icon' icon={solid('earth-americas')} />
            <h1>my travel journal</h1>
        </nav>
    )
}