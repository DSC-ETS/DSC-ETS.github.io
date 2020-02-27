import React from 'react';
import './EventTimer.css'

export default class EventTimer extends React.Component {
    render() {
        return(
            <div className="event-timer">
                <div className="event-timer-box">
                    <h2 className="event-timer-title">PROCHAIN MEETING !</h2>
                </div>
            </div>
        );
    }
}