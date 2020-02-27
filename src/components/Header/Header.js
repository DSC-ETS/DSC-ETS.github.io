import React from 'react';
import Menu from './Menu';
import './Header.css'

export default class Header extends React.Component {
    render() {
        return(
            <div className="header">
                <img className="logo" src="" alt="DSC Logo"/>
                <Menu />
            </div>
        );
    }
}