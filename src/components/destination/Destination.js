import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import './Destination.css'

export default function Destination(props) {
    console.log(props.imageUrl)
    return (
        <article className='destination'>
            <img className='destination__image' src={props.imageUrl} alt={props.title} />
            <div className='destination__details'>
                <FontAwesomeIcon icon={solid('location-dot')} />
                <span className='destination__country'>{props.location}</span>
                <a className='destination__maps' href={props.googleMapsUrl}>View on Google Maps</a>
                <h1 className='destination__name'>{props.title}</h1>
                <span className='destination__travel-date'>{props.startDate} - {props.endDate}</span>
                <p className='destination__description'>{props.description}</p>
            </div>
        </article>
    )
}