import React, { Component } from 'react';
import './BannerCard.css';

export default class BannerCard extends Component {
    render() {
        return (

            <div className="bannercard">
                <h1>INTERIOR DESIGN</h1>
                <div className="banner-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor</p>
                    <p>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                    <p> quis nostrud exercitation ullamco laboris nisi ut  consequat.</p>
                </div>
                <a className="btn btn-banner" href="/">REQUEST A QUOTE</a>
            </div>
        )
    }
}
