import React, { Component } from 'react';
import './OurServices.css';
import ServiceCard from './ServiceCard/ServiceCard';

export default class OurServices extends Component {
    state = {
        services: [
            {
                index: 1,
                figure: 'images/creative-solution-img1.jpg',
                figicon: 'images/interior-design.png',
                fighead: 'INTERIOR DESIGN',
                figtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor  exercitation ullamco laboris nisi ut aliquip e'
            },
            // {
            //     index: 2,
            //     figure: 'images/creative-solution-img2.jpg',
            //     figicon: 'images/Renovation.png',
            //     fighead: 'RENOVATION',
            //     figtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor  exercitation ullamco laboris nisi ut aliquip e'
            // },
            // {
            //     index: 3,
            //     figure: './images/creative-solution-img3.jpg',
            //     figicon: 'images/Construction.png',
            //     fighead: 'CONSTRUCTION',
            //     figtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor  exercitation ullamco laboris nisi ut aliquip e'
            // },
            // {
            //     index: 4,
            //     figure: './images/creative-solution-img4.jpg',
            //     figicon: 'images/Architecture.png',
            //     fighead: 'ARCHITECTURE',
            //     figtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor  exercitation ullamco laboris nisi ut aliquip e'
            // }
        ]
    }

    render() {
        
        return (
            <div className="ourservice container">
                <h2>OUR SERVICES</h2>
                <h3>Creative Solutins</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor  exercitation ullamco
                     laboris nisi ut aliquip ex ea commodo consequat</p>
                     <div className="servicecard">
                {
                    this.state.services.map((service, index) => {
                        return <ServiceCard
                            key={index}
                            figure={service.figure}
                            figicon={service.figicon}
                            fighead={service.fighead}
                            figtext={service.figtext}

                        />
                    }

                    )
                }
                </div>
            </div>
        )
    }
}
