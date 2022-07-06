import React from 'react';
import Destination from './components/destination/Destination';
import data from './data.js'

export default function App() {
    return (
        <Destination {...data[0]} />
    )
}