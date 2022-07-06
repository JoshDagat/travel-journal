import React from 'react';
import Destination from './components/destination/Destination';
import Navbar from './components/navbar/Navbar';
import data from './data.js'
import './App.css'

export default function App() {

    const destinations = data.map(location => {
        return (
            <Destination key={location.title} {...location} />
        )
    })

    return (
        <div className='app'>
            <Navbar />
            <div className='app__main-content'>
                {destinations}
            </div>
        </div>
    )
}