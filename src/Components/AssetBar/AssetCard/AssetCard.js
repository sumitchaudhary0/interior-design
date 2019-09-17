import React, { Component } from 'react';
import './AssetCard.css';

export default class AssetCard extends Component {
    render() {
        console.log(this.props.icon)
        return (
            <div className="assetcard">
                <div className="img-container">
                    <img src={this.props.icon} alt=""/>
                </div>
                <div className="Asset-content">
                    <p className="numbers">{this.props.number}</p>
                    <p className="name">{this.props.assetName}</p>
                </div>
            </div>
        )
    }
}
