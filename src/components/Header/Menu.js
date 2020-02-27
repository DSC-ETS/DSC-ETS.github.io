import React from 'react';
import './Menu.css'

export default class Menu extends React.Component {

    // TODO : Create state objects to store the menu entries

    render() {
        return(
            <ul className="menu">
                <li className="menu-entry menu-entry-active">Give a talk</li>
                <li className="menu-entry">Sponsorship</li>
                <li className="menu-entry">Speaker deck</li>
                <li className="menu-entry">Évènements</li>
                <li className="menu-entry">Slack</li>
            </ul>
        );
    }
}