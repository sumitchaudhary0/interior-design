import React, { Component } from 'react';
import AssetCard from './AssetCard/AssetCard';
import './AssetBar.css';


export default class AssetBar extends Component {
    state = {
        assets: [
            { index: 1, icon: './images/Awards.png', number: '67', assetName: 'Awards' },
            { index: 2, icon: './images/Projects.png', number: '989', assetName: 'projects' },
            { index: 3, icon: './images/Employees.png', number: '481', assetName: 'Employees' },
            { index: 4, icon: './images/showvases.png', number: '77', assetName: 'Showcases' }
        ]
    }
    render() {
        return (
            <React.Fragment>
                <div className="AssetBar container">
                    {
                        this.state.assets.map((asset, index) => {
                            return <AssetCard
                                key={index}
                                icon={asset.icon}
                                number={asset.number}
                                assetName={asset.assetName}
                            />
                        })
                    }
                </div>
            </React.Fragment>
        )
    }
}
