import React, { Component } from 'react';
import './ServiceCard.css';



export default class ServiceCard extends Component {
    render() {
        const style= {
            backgroundImage : `url(${this.props.figure})` ,
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover',
            padding:'20px',
            
        }
        return (
            <figure  >
                  
                  <div  style={style}>
                <img src={this.props.figicon} alt="" />
                </div>
                <figcaption>
                    <h4>{this.props.fighead}</h4>
                    <p>{this.props.figtext}</p>
                </figcaption>
            </figure>
        )
    }
}
